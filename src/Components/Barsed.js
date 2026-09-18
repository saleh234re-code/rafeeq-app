import   { useMemo } from "react";
import DoaaCom from "./DoaaComp";
 import Adkaer from "../Components/Adhkar";
import Doaa from '../images/dua.png'
import Sulah from "../Components/Sulah";
import { HashRouter, useLocation, useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider } from "@toolpad/core/internal";

import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpaIcon from "@mui/icons-material/Spa";

import DashBoard from "./DashBoard";
import Quran from "../Components/Quran";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// الكومبوننت الداخلي عشان نقدر نستخدم الـ hooks
function DashboardContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const router = useMemo(() => {
    return {
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    };
  }, [location, navigate]);

  let content = <DashBoard />;

  if (location.pathname === "/Quran") {
    content = <Quran />;
  } else if (location.pathname === "/DoaaCom") {
    content = <DoaaCom />;
  } else if (location.pathname === "/Sulah") {
    content = <Sulah />;
  } else if (location.pathname === "/Adkaer") {
    content = <Adkaer />;
  } else if (location.pathname === "/DashBoard" || location.pathname === "/") {
    content = <DashBoard />;
  }

  return (
    <AppProvider
      branding={{
        title: "رفيق",
      }}
      navigation={[
        {
          segment: "DashBoard",
          title: "الرئيسية",
          icon: <HomeIcon sx={{ color: "white !important" }} />,
        },
        {
          segment: "Quran",
          title: "القرآن",
          icon: <AutoStoriesIcon sx={{ color: "white !important" }} />,
        },
        {
          segment: "DoaaCom",
          title: "أدعية",
          icon: (
            <img
              src={Doaa}
              alt="أدعية"
              style={{
                width: 24,
                height: 24,
                filter: "brightness(0) invert(1)", // عشان تبقى بيضاء زي باقي الأيقونات
              }}
            />
          ),
        },
        {
          segment: "Sulah",
          title: "مواعيد الصلاة",
          icon: <AccessTimeIcon sx={{ color: "white !important" }} />,
        },
        {
          segment: "Adkaer",
          title: "الأذكار",
          icon: <SpaIcon sx={{ color: "white !important" }} />,
        },
      ]}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout
        sx={{
          "& .MuiDrawer-root.MuiDrawer-anchorLeft.MuiDrawer-docked": {
            width: "200px",
          },
          "& .MuiDrawer-root.MuiDrawer-anchorLeft.MuiDrawer-docked .MuiDrawer-paper": {
            width: "200px",
            backgroundColor: "#133330",
            color: "white",
          },
        }}
      >
        {content}
      </DashboardLayout>
    </AppProvider>
  );
}

export default function DashboardLayoutNavigationLinks() {
  return (
    <DemoProvider>
      <HashRouter>
        <DashboardContent />
      </HashRouter>
    </DemoProvider>
  );
}