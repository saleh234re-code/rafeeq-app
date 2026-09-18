import { useContext, useState, useRef, useEffect } from "react";
import Backgrounded from "../images/ChatGPT Image Sep 16, 2026, 07_54_16 PM.png";
import { QuranContexted } from "../Context/Quran";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";

export default function Quran() {
  const { ShowSurah, selectedSurah, getOneSurah } = useContext(QuranContexted);
  const [search, setsearch] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const contentRef = useRef(null);

  // لما تتفتح سورة على الموبايل، ننزل تلقائي لمكان المحتوى
  useEffect(() => {
    if (selectedSurah && isMobile && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedSurah, isMobile]);

  const surah = ShowSurah.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )
    .slice(0, 10)
    .map((p) => {
      const isSelected = selectedSurah?.number === p.number;

      return (
        <Box
          key={p.number}
          onClick={() => getOneSurah(p.number)}
          sx={{
            position: "relative",
            width: "100%",
            minHeight: "80px",
            color: isSelected ? "#fff" : "#2F6F5E",
            margin: "0 0 10px 0",
            p: 2,
            borderRadius: 3,
            background: isSelected ? "#2F6F5E" : "#E5F2ED",
            border: isSelected ? "2px solid #1a4a3a" : "1px solid #e5e7eb",
            boxShadow: isSelected
              ? "0 6px 18px rgba(47, 111, 94, 0.35)"
              : "0 4px 15px rgba(0,0,0,0.06)",
            transition: "0.25s",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-3px)",
              boxShadow: isSelected
                ? "0 8px 22px rgba(47, 111, 94, 0.4)"
                : "0 8px 20px rgba(0,0,0,0.1)",
            },
            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          {/* رقم السورة */}
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: isSelected ? "#fff" : "#2F6F5E",
              color: isSelected ? "#2F6F5E" : "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "14px",
              flexShrink: 0,
              mr: 2,
            }}
          >
            {p.number}
          </Box>

          {/* اسم السورة والمعلومات */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                color: isSelected ? "#fff" : "#1a4a3a",
                lineHeight: 1.3,
              }}
            >
              {p.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: isSelected ? "rgba(255,255,255,0.85)" : "#5a7a6e",
                mt: 0.3,
              }}
            >
              {p.englishName} • {p.numberOfAyahs} آيات
            </Typography>
          </Box>

          {/* الأيقونات */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }}>
            <AutoStoriesIcon
              sx={{ fontSize: 20, color: isSelected ? "#fff" : "#2F6F5E" }}
            />
            <KeyboardArrowRightIcon
              sx={{ color: isSelected ? "#fff" : "#2F6F5E", fontSize: 22 }}
            />
          </Box>
        </Box>
      );
    });

  return (
    <Box
      sx={{
        px: { xs: 1.5, sm: 2, md: 3 },
        pb: 4,
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* صورة الخلفية */}
      <Box
        component="img"
        alt="صورة المنتج"
        src={Backgrounded}
        sx={{
          height: { xs: "140px", sm: "180px", md: "200px" },
          width: "100%",
          objectFit: "cover",
          borderRadius: { xs: "12px", md: "15px" },
          mb: 2,
          display: "block",
        }}
      />

      {/* الحاوية الرئيسية */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 2 },
          alignItems: "flex-start",
        }}
      >
        {/* قائمة السور + البحث */}
        <Box
          sx={{
            width: { xs: "100%", md: 340 },
            flexShrink: 0,
            background: "#E5F2ED",
            borderRadius: 3,
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            p: { xs: 2, sm: 2.5 },
            position: { md: "sticky" },
            top: { md: 16 },
            maxHeight: { md: "calc(100vh - 40px)" },
            overflowY: { md: "auto" },
          }}
        >
          <TextField
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            variant="outlined"
            dir="rtl"
            placeholder="البحث عن سورة"
            fullWidth
            size="small"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: 2,
                "& fieldset": {
                  borderColor: "#c8ddd4",
                },
                "&:hover fieldset": {
                  borderColor: "#2F6F5E",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2F6F5E",
                },
              },
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>{surah}</Box>
        </Box>

        {/* عرض السورة المختارة */}
        {selectedSurah && (
          <Box
            ref={contentRef}
            sx={{
              flex: 1,
              width: "100%",
              borderRadius: 3,
              background: "#F8F0E3",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
              p: { xs: 2, sm: 3, md: 4 },
              direction: "rtl",
            }}
          >
            {/* رأس السورة */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 1, sm: 2 },
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#2F6F5E",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "15px" },
                  order: { xs: 2, sm: 1 },
                }}
              >
                {selectedSurah.revelationType === "Meccan" ? "مكية" : "مدنية"}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#2F6F5E",
                  fontWeight: 700,
                  textAlign: "center",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  order: { xs: 1, sm: 2 },
                }}
              >
                ﴿ {selectedSurah.name} ﴾
              </Typography>

              <Typography
                sx={{
                  color: "#2F6F5E",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "15px" },
                  order: { xs: 3, sm: 3 },
                }}
              >
                عدد الآيات : {selectedSurah.numberOfAyahs}
              </Typography>
            </Box>

            <Box
              component="hr"
              sx={{
                width: "100%",
                border: "none",
                borderTop: "1.5px solid #2F6F5E",
                opacity: 0.4,
                mb: 3,
              }}
            />

            {/* الآيات */}
            {selectedSurah.ayahs.map((ayah) => (
              <Typography
                key={ayah.number}
                component="div"
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  lineHeight: { xs: 1.9, sm: 2 },
                  textAlign: "center",
                  color: "#222",
                  mb: { xs: 2.5, sm: 2 },
                  px: { xs: 0.5, sm: 1 },
                }}
              >
                {ayah.text}{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#2F6F5E",
                    fontSize: { xs: "15px", sm: "16px" },
                    fontWeight: 500,
                  }}
                >
                  ﴿{ayah.numberInSurah}﴾
                </Box>
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}