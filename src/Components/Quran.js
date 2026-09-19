import { useContext, useState, useRef, useEffect } from "react";
import Backgrounded from "../images/ChatGPT Image Sep 16, 2026, 07_54_16 PM.png";
import { QuranContexted } from "../Context/Quran";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

// دالة إزالة التشكيل
function removeTashkeel(text) {
  if (!text) return "";
  return text
    .replace(/[\u064B-\u065F]/g, "")
    .replace(/ٱ/g, "ا")
    .trim();
}

export default function Quran() {
  const { ShowSurah, selectedSurah, getOneSurah } = useContext(QuranContexted);
  const [search, setsearch] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const contentRef = useRef(null);

  // فتح سورة الفاتحة تلقائيًا لما الصفحة تفتح
  useEffect(() => {
    if (!selectedSurah) {
      getOneSurah(1);
    }
  }, []);

  // لما تتفتح سورة على الموبايل، ننزل تلقائي لمكان المحتوى
  useEffect(() => {
    if (selectedSurah && isMobile && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedSurah, isMobile]);

  const filteredSurahs = ShowSurah.filter((p) => {
    const cleanName = removeTashkeel(p.name);
    const cleanSearch = removeTashkeel(search);
    return cleanName.includes(cleanSearch);
  });

  const surah = filteredSurahs.map((p) => {
    const isSelected = selectedSurah?.number === p.number;

    return (
      <Box
        key={p.number}
        onClick={() => getOneSurah(p.number)}
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "72px",
          color: isSelected ? "#fff" : "#2F6F5E",
          mb: 1.2,
          p: "12px 14px",
          borderRadius: 2.5,
          background: isSelected ? "#2F6F5E" : "#ffffff",
          border: isSelected ? "2px solid #1a4a3a" : "1px solid #e2ebe6",
          boxShadow: isSelected
            ? "0 6px 18px rgba(47, 111, 94, 0.3)"
            : "0 2px 8px rgba(0,0,0,0.04)",
          transition: "all 0.22s ease",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            transform: isMobile ? "none" : "translateY(-2px)",
            boxShadow: isSelected
              ? "0 8px 22px rgba(47, 111, 94, 0.35)"
              : "0 6px 16px rgba(0,0,0,0.08)",
            borderColor: isSelected ? "#1a4a3a" : "#2F6F5E",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        }}
      >
        {/* رقم السورة */}
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: isSelected ? "#fff" : "#2F6F5E",
            color: isSelected ? "#2F6F5E" : "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "13px",
            flexShrink: 0,
            mr: 1.8,
          }}
        >
          {p.number}
        </Box>

        {/* اسم السورة والمعلومات */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "15.5px",
              color: isSelected ? "#fff" : "#1a4a3a",
              lineHeight: 1.3,
            }}
          >
            {p.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "12.5px",
              color: isSelected ? "rgba(255,255,255,0.85)" : "#6b8a7c",
              mt: 0.25,
            }}
          >
            {p.englishName} • {p.numberOfAyahs} آيات
          </Typography>
        </Box>

        {/* الأيقونات */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.3, flexShrink: 0 }}>
          <AutoStoriesIcon
            sx={{ fontSize: 18, color: isSelected ? "#fff" : "#2F6F5E", opacity: 0.9 }}
          />
          <KeyboardArrowRightIcon
            sx={{ color: isSelected ? "#fff" : "#2F6F5E", fontSize: 20 }}
          />
        </Box>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        px: { xs: 1.5, sm: 2, md: 3 },
        pb: 5,
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
          borderRadius: { xs: "12px", md: "16px" },
          mb: 2.5,
          display: "block",
        }}
      />

      {/* الحاوية الرئيسية */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2.5, md: 3 },
          alignItems: "flex-start",
        }}
      >
        {/* ========== القائمة الجانبية (البحث + السور) ========== */}
        <Box
          sx={{
            width: { xs: "100%", md: 380 },
            flexShrink: 0,
            background: "#f7fbf9",
            borderRadius: 3,
            border: "1px solid #e0ebe5",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            p: { xs: 2, sm: 2.5 },
            position: { md: "sticky" },
            top: { md: 20 },
            maxHeight: { md: "calc(100vh - 48px)" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* عنوان القائمة */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "17px",
              color: "#1a4a3a",
              mb: 1.8,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AutoStoriesIcon sx={{ fontSize: 22, color: "#2F6F5E" }} />
            فهرس السور
          </Typography>

          {/* البحث */}
          <TextField
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            variant="outlined"
            dir="rtl"
            placeholder="ابحث عن سورة..."
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#2F6F5E", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                borderRadius: 2.5,
                "& fieldset": {
                  borderColor: "#d0e0d8",
                },
                "&:hover fieldset": {
                  borderColor: "#2F6F5E",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2F6F5E",
                  borderWidth: "1.5px",
                },
              },
            }}
          />

          {/* عدد النتائج */}
          {search && (
            <Typography
              sx={{
                fontSize: "13px",
                color: "#5a7a6e",
                mb: 1.5,
                px: 0.5,
              }}
            >
              {filteredSurahs.length} نتيجة
            </Typography>
          )}

          {/* قائمة السور */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              pr: 0.5,
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#e8f0ec",
                borderRadius: 10,
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#2F6F5E",
                borderRadius: 10,
              },
            }}
          >
            {surah.length > 0 ? (
              surah
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#6b8a7c",
                  py: 4,
                  fontSize: "15px",
                }}
              >
                مفيش سور مطابقة للبحث
              </Typography>
            )}
          </Box>
        </Box>

        {/* ========== عرض السورة المختارة ========== */}
        {selectedSurah ? (
          <Box
            ref={contentRef}
            sx={{
              flex: 1,
              width: "100%",
              borderRadius: 3,
              background: "linear-gradient(180deg, #FDF8F0 0%, #F8F0E3 100%)",
              border: "1px solid #e8dfd0",
              boxShadow: "0 8px 30px rgba(0,0,0,0.07)",
              p: { xs: 2.5, sm: 3.5, md: 4.5 },
              direction: "rtl",
              position: "relative",
              overflow: "hidden",
              minHeight: { md: "70vh" },
            }}
          >
            {/* زخرفة خفيفة في الخلفية */}
            <Box
              sx={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(47,111,94,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -50,
                left: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(47,111,94,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* رأس السورة */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 1, sm: 2 },
                mb: 2,
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  color: "#2F6F5E",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "15px" },
                  order: { xs: 2, sm: 1 },
                  background: "rgba(47,111,94,0.08)",
                  px: 1.5,
                  py: 0.4,
                  borderRadius: 2,
                }}
              >
                {selectedSurah.revelationType === "Meccan" ? "مكية" : "مدنية"}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#1a4a3a",
                  fontWeight: 700,
                  textAlign: "center",
                  fontSize: { xs: "22px", sm: "26px", md: "30px" },
                  order: { xs: 1, sm: 2 },
                  letterSpacing: "1px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.05)",
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
                  background: "rgba(47,111,94,0.08)",
                  px: 1.5,
                  py: 0.4,
                  borderRadius: 2,
                }}
              >
                عدد الآيات : {selectedSurah.numberOfAyahs}
              </Typography>
            </Box>

            <Box
              component="hr"
              sx={{
                width: "60%",
                mx: "auto",
                border: "none",
                borderTop: "1.5px solid #2F6F5E",
                opacity: 0.3,
                mb: 4,
              }}
            />

            {/* الآيات */}
            <Box sx={{ position: "relative" }}>
              {selectedSurah.ayahs.map((ayah, index) => (
                <Typography
                  key={ayah.number}
                  component="div"
                  sx={{
                    fontSize: { xs: "20px", sm: "22px", md: "26px" },
                    lineHeight: { xs: 2.1, sm: 2.2 },
                    textAlign: "center",
                    color: "#2c2c2c",
                    mb: { xs: 3, sm: 2.8 },
                    px: { xs: 1, sm: 2 },
                    fontFamily: "'Amiri', 'Traditional Arabic', 'Scheherazade New', serif",
                    letterSpacing: "0.3px",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    py: 1,
                    "&:hover": {
                      background: "rgba(47, 111, 94, 0.04)",
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline",
                      background: index % 2 === 0 ? "transparent" : "rgba(47,111,94,0.03)",
                      borderRadius: 1,
                      px: 0.5,
                    }}
                  >
                    {ayah.text}
                  </Box>{" "}
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2F6F5E",
                      fontSize: { xs: "14px", sm: "15px" },
                      fontWeight: 600,
                      background: "rgba(47,111,94,0.1)",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      mx: 0.5,
                      verticalAlign: "middle",
                    }}
                  >
                    {ayah.numberInSurah}
                  </Box>
                </Typography>
              ))}
            </Box>
          </Box>
        ) : (
          // لما مفيش سورة مختارة (على الكمبيوتر)
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              borderRadius: 3,
              background: "linear-gradient(180deg, #FDF8F0 0%, #F8F0E3 100%)",
              border: "1px dashed #d4c9b5",
              color: "#8a7a65",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <AutoStoriesIcon sx={{ fontSize: 48, opacity: 0.4 }} />
            <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
              اختر سورة من القائمة للبدء
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}