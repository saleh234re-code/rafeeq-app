import { DoaaContext } from "../Context/Doaas";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HealingIcon from "@mui/icons-material/Healing";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PublicIcon from "@mui/icons-material/Public";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RefreshIcon from "@mui/icons-material/Refresh";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ShieldIcon from "@mui/icons-material/Shield";
import SecurityIcon from "@mui/icons-material/Security";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarsIcon from "@mui/icons-material/Stars";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TuneIcon from "@mui/icons-material/Tune";
import SpaIcon from "@mui/icons-material/Spa";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloudIcon from "@mui/icons-material/Cloud";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BalanceIcon from "@mui/icons-material/Balance";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import WavesIcon from "@mui/icons-material/Waves";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GroupsIcon from "@mui/icons-material/Groups";
import LockIcon from "@mui/icons-material/Lock";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CelebrationIcon from "@mui/icons-material/Celebration";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ExploreIcon from "@mui/icons-material/Explore";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CallMadeIcon from "@mui/icons-material/CallMade";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MosqueIcon from "@mui/icons-material/Mosque";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import "../Progect.css";

const icons = {
  AutoAwesome: AutoAwesomeIcon,
  Favorite: FavoriteIcon,
  Healing: HealingIcon,
  SelfImprovement: SelfImprovementIcon,
  AccountBalanceWallet: AccountBalanceWalletIcon,
  WbSunny: WbSunnyIcon,
  Public: PublicIcon,
  VolunteerActivism: VolunteerActivismIcon,
  Refresh: RefreshIcon,
  FitnessCenter: FitnessCenterIcon,
  School: SchoolIcon,
  FavoriteBorder: FavoriteBorderIcon,
  AccessibilityNew: AccessibilityNewIcon,
  HeartBroken: HeartBrokenIcon,
  FamilyRestroom: FamilyRestroomIcon,
  ChildCare: ChildCareIcon,
  Shield: ShieldIcon,
  Security: SecurityIcon,
  MonetizationOn: MonetizationOnIcon,
  Stars: StarsIcon,
  MedicalServices: MedicalServicesIcon,
  HealthAndSafety: HealthAndSafetyIcon,
  Tune: TuneIcon,
  Spa: SpaIcon,
  EmojiEvents: EmojiEventsIcon,
  Cloud: CloudIcon,
  LocalFireDepartment: LocalFireDepartmentIcon,
  Balance: BalanceIcon,
  SentimentVerySatisfied: SentimentVerySatisfiedIcon,
  CleaningServices: CleaningServicesIcon,
  Waves: WavesIcon,
  RecordVoiceOver: RecordVoiceOverIcon,
  DarkMode: DarkModeIcon,
  Groups: GroupsIcon,
  Lock: LockIcon,
  MilitaryTech: MilitaryTechIcon,
  Celebration: CelebrationIcon,
  TaskAlt: TaskAltIcon,
  Explore: ExploreIcon,
  Dangerous: DangerousIcon,
  CallMade: CallMadeIcon,
  QuestionMark: QuestionMarkIcon,
  Bedtime: BedtimeIcon,
  Mosque: MosqueIcon,
  FlightTakeoff: FlightTakeoffIcon,
  MenuBook: MenuBookIcon,
};

export default function DoaaCom() {
  const { showDoaa } = useContext(DoaaContext);
  const [show, setShow] = useState(null);
  const [search, setsearch] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredDoaa = showDoaa.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // على الشاشات الكبيرة نعرض 4 فقط، على الموبايل نعرض أكتر شوية
  const displayedDoaa = filteredDoaa.slice(0, isMobile ? 6 : 4);

  const selectedDoaa = showDoaa.find((p) => p.id === show);

  return (
    <Box
      id="Doaa"
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: { xs: 1.5, sm: 2, md: 4 },
        pb: 6,
        pt: 2,
        position: "relative",
      }}
    >
      {/* البحث */}
      <TextField
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        dir="rtl"
        placeholder="البحث عن دعاء"
        fullWidth
        sx={{
          maxWidth: { xs: "100%", sm: "70%", md: "450px" },
          mx: "auto",
          display: "block",
          mb: { xs: 3, md: 5 },
          mt: { xs: 2, sm: 4 },
          background: "#F8F0E3",
          borderRadius: 3,
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          "& fieldset": {
            border: "1px solid #e5e7eb",
          },
          "&:hover fieldset": {
            borderColor: "#9A6F24 !important",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#9A6F24 !important",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#9A6F24" }} />
            </InputAdornment>
          ),
        }}
      />

      {/* شبكة الكروت - 4 فقط على الشاشات الكبيرة */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",           // موبايل: كارت واحد
            sm: "repeat(2, 1fr)", // تابلت: 2
            md: "repeat(2, 1fr)", // شاشة متوسطة: 2
            lg: "repeat(4, 1fr)", // شاشة كبيرة: 4 جنب بعض
          },
          gap: { xs: 2, sm: 2.5, lg: 3 },
          maxWidth: "1400px",
          mx: "auto",
          justifyContent: "center",
        }}
      >
        {displayedDoaa.map((p) => {
          const Icon = icons[p.icon] || AutoAwesomeIcon;
          const isSelected = show === p.id;

          return (
            <Box
              key={p.id}
              onClick={() => setShow(p.id)}
              sx={{
                width: "100%",
                minHeight: { xs: "160px", sm: "180px", lg: "200px" },
                color: "#9A6F24",
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                background: isSelected ? "#2F6F5E" : "#F8F0E3",
                border: isSelected ? "2px solid #1a4a3a" : "1px solid #e5e7eb",
                boxShadow: isSelected
                  ? "0 8px 25px rgba(47,111,94,0.3)"
                  : "0 6px 20px rgba(0,0,0,0.07)",
                transition: "0.25s",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                "&:hover": {
                  transform: isMobile ? "none" : "translateY(-4px)",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              <Icon
                sx={{
                  fontSize: { xs: 48, sm: 56, lg: 60 },
                  mb: 1.5,
                  color: isSelected ? "#fff" : "#9A6F24",
                }}
              />
              <Typography
                sx={{
                  color: isSelected ? "#fff" : "#2F6F5E",
                  fontWeight: 600,
                  fontSize: { xs: "15px", sm: "16px" },
                  lineHeight: 1.4,
                }}
              >
                {p.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* المودال */}
      {selectedDoaa && (
        <>
          <Box
            onClick={() => setShow(null)}
            sx={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 999,
              backdropFilter: "blur(3px)",
            }}
          />

          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "92%", sm: "80%", md: "55%" },
              maxWidth: "600px",
              maxHeight: { xs: "85vh", sm: "80vh" },
              overflowY: "auto",
              zIndex: 1000,
              color: "#9A6F24",
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              background: "#F8F0E3",
              border: "1px solid #e5e7eb",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => setShow(null)}
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                color: "#2F6F5E",
                background: "rgba(47,111,94,0.08)",
                "&:hover": {
                  background: "rgba(47,111,94,0.15)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {(() => {
              const Icon = icons[selectedDoaa.icon] || AutoAwesomeIcon;
              return (
                <Icon
                  sx={{
                    fontSize: { xs: 50, sm: 60 },
                    color: "#9A6F24",
                    mb: 2,
                    mt: 1,
                  }}
                />
              );
            })()}

            <Typography
              sx={{
                fontWeight: 700,
                textAlign: "center",
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                lineHeight: 1.8,
                color: "#2F6F5E",
                mb: 3,
                px: 1,
              }}
            >
              {selectedDoaa.arabic}
            </Typography>

            <Box
              component="button"
              onClick={() => setShow(null)}
              sx={{
                mt: "auto",
                px: 4,
                py: 1.5,
                border: "none",
                borderRadius: 3,
                background: "#2F6F5E",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.25s",
                "&:hover": {
                  background: "#245a4c",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 18px rgba(47,111,94,0.35)",
                },
                "&:active": {
                  transform: "scale(0.97)",
                },
              }}
            >
              إغلاق
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}