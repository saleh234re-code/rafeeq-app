import MosqueIcon from "@mui/icons-material/Mosque";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Speaha from "../images/arabic.png";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { SulahContext } from "../Context/Sulah";
import BackgroundSulah from "../images/Main.png";
import Doaa from "../images/dua.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
import IconImg from "../images/iconbb.png";
import Background from "../images/Gemini_Generated_Image_ggatd1ggatd1ggat.jfif";
import { useContext, useState, useEffect } from "react";
import { DoaaContext } from "../Context/Doaas";
import { useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import AdSense from "./AdSense";
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
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HealingIcon from "@mui/icons-material/Healing";
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

export default function DashBoard() {
  const { showDoaa } = useContext(DoaaContext);
  const [show, setShow] = useState(null);
  const { getSurah } = useContext(SulahContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const selectedDoaa = showDoaa?.find((p) => p.id === show);

  // ========== الصلاة القادمة ==========
  const [nextPrayer, setNextPrayer] = useState({ name: "", timeLeft: "", time: "" });

  useEffect(() => {
    if (!getSurah?.timings) return;

    const updateNextPrayer = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const prayers = [
        { name: "الفجر", key: "Fajr" },
        { name: "الظهر", key: "Dhuhr" },
        { name: "العصر", key: "Asr" },
        { name: "المغرب", key: "Maghrib" },
        { name: "العشاء", key: "Isha" },
      ];

      let next = null;

      for (let prayer of prayers) {
        const [h, m] = getSurah.timings[prayer.key].split(":").map(Number);
        const prayerMinutes = h * 60 + m;

        if (prayerMinutes > currentMinutes) {
          next = {
            name: prayer.name,
            time: getSurah.timings[prayer.key],
            minutesLeft: prayerMinutes - currentMinutes,
          };
          break;
        }
      }

      if (!next) {
        const [h, m] = getSurah.timings.Fajr.split(":").map(Number);
        const fajrMinutes = h * 60 + m;
        const minutesLeft = 24 * 60 - currentMinutes + fajrMinutes;

        next = {
          name: "الفجر",
          time: getSurah.timings.Fajr,
          minutesLeft,
        };
      }

      const hours = Math.floor(next.minutesLeft / 60);
      const minutes = next.minutesLeft % 60;

      setNextPrayer({
        name: next.name,
        time: next.time,
        timeLeft: hours > 0 ? `${hours} س و ${minutes} د` : `${minutes} دقيقة`,
      });
    };

    updateNextPrayer();
    const interval = setInterval(updateNextPrayer, 30000);
    return () => clearInterval(interval);
  }, [getSurah]);

  // مواقيت الصلاة
  const prayerNames = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  return (
    <Box sx={{ px: { xs: 1.5, sm: 2, md: 3 }, pb: 4, maxWidth: "1400px", mx: "auto" }}>
      {/* ========== الهيدر ========== */}
      <Box sx={{ position: "relative", mb: 2, borderRadius: { xs: "12px", md: "15px" }, overflow: "hidden" }}>
        <Box
          component="img"
          alt="خلفية"
          src={Background}
          sx={{
            height: { xs: "180px", sm: "220px", md: "250px" },
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* نص الترحيب */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "12%", md: "8%" },
            right: { xs: "4%", md: "5%" },
            textAlign: "right",
            maxWidth: { xs: "55%", md: "40%" },
          }}
        >
          <Typography
            sx={{
              m: 0,
              color: "#F5F0E8",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
              fontWeight: 700,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            مــرحبا بك
          </Typography>
          <Typography
            sx={{
              m: 0,
              color: "#F5F0E8",
              fontSize: { xs: "0.95rem", sm: "1.2rem", md: "1.4rem" },
              fontWeight: 600,
              textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            في تطبيق رفيق
          </Typography>
          <Typography
            sx={{
              m: 0,
              color: "#F5F0E8",
              fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
              fontWeight: 500,
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              display: { xs: "none", sm: "block" },
            }}
          >
            يومك ملئ بالخير والبركة
          </Typography>
        </Box>

        {/* الآية */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "10%", md: "15%" },
            left: { xs: "4%", md: "5%" },
            textAlign: "left",
            maxWidth: { xs: "70%", md: "45%" },
          }}
        >
          <Typography
            sx={{
              color: "#F5F0E8",
              fontSize: { xs: "0.85rem", sm: "1.1rem", md: "1.35rem" },
              fontWeight: 500,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              lineHeight: 1.5,
            }}
          >
            وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
          </Typography>
          <Typography
            sx={{
              color: "#F5F0E8",
              fontSize: { xs: "0.7rem", sm: "0.85rem" },
              mt: 0.5,
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            سورة الذاريات - آية 56
          </Typography>
        </Box>
      </Box>
<AdSense slot="3331557063" style={{ mt: 4, mb: 2 }} />

      {/* ========== كروت التنقل السريع ========== */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 1.5, sm: 2 },
          mb: 2.5,
        }}
      >
        {/* مواقيت الصلاة */}
        <Box
          onClick={() => navigate("/Sulah")}
          sx={{
            color: "#2F6F5E",
            p: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            background: "#E5F2ED",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            transition: "0.25s",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-4px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
            "&:active": { transform: "scale(0.97)" },
          }}
        >
          <MosqueIcon sx={{ fontSize: { xs: 36, sm: 48 }, mb: 0.5 }} />
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            مواقيت الصلاة
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: "0.75rem", sm: "0.85rem" }, opacity: 0.85 }}>
            أقم الصلاة في وقتها
          </Typography>
        </Box>

        {/* القرآن */}
        <Box
          onClick={() => navigate("/Quran")}
          sx={{
            color: "#9A6F24",
            p: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            background: "#F8F0E3",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            transition: "0.25s",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-4px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
            "&:active": { transform: "scale(0.97)" },
          }}
        >
          <AutoStoriesIcon sx={{ fontSize: { xs: 36, sm: 48 }, mb: 0.5 }} />
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            القرآن الكريم
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: "0.75rem", sm: "0.85rem" }, opacity: 0.85 }}>
            اقرأ...تدبر...رتل
          </Typography>
        </Box>

        {/* الأذكار */}
        <Box
          onClick={() => navigate("/Adkaer")}
          sx={{
            color: "#7055A5",
            p: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            background: "#F0EAF8",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            transition: "0.25s",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-4px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
            "&:active": { transform: "scale(0.97)" },
          }}
        >
          <Box component="img" src={Speaha} sx={{ width: { xs: 36, sm: 48 }, mb: 0.5 }} />
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            الأذكار
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: "0.75rem", sm: "0.85rem" }, opacity: 0.85 }}>
            طريقك للطمأنينة
          </Typography>
        </Box>

        {/* الأدعية */}
        <Box
          onClick={() => navigate("/DoaaCom")}
          sx={{
            color: "#2E73A8",
            p: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            background: "#E5F2FA",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            transition: "0.25s",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-4px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
            "&:active": { transform: "scale(0.97)" },
          }}
        >
          <Box component="img" src={Doaa} sx={{ width: { xs: 36, sm: 48 }, mb: 0.5 }} />
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            الأدعية
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: "0.75rem", sm: "0.85rem" }, opacity: 0.85 }}>
            بها تطمئن القلوب
          </Typography>
        </Box>
      </Box>

      {/* ========== القسم السفلي ========== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "stretch",
        }}
      >
        {/* مواقيت الصلاة اليوم */}
        <Box
          sx={{
            flex: { md: 1.6 },
            position: "relative",
            borderRadius: 3,
            overflow: "hidden",
            background: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            p: { xs: 1.5, sm: 2 },
          }}
        >
          <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden", mb: 2 }}>
            <Box
              component="img"
              alt="مواقيت"
              src={BackgroundSulah}
              sx={{
                height: { xs: "140px", sm: "180px", md: "200px" },
                width: "100%",
                objectFit: "cover",
                filter: "brightness(0.45)",
                display: "block",
              }}
            />

            {/* كارت الصلاة القادمة */}
            {nextPrayer.name && (
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  background: "rgba(47, 111, 94, 0.92)",
                  color: "white",
                  px: 1.8,
                  py: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  zIndex: 2,
                }}
              >
                <AccessTimeIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
                <Box>
                  <Typography sx={{ fontSize: "0.7rem", opacity: 0.9, lineHeight: 1.2 }}>
                    الصلاة القادمة
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem" }, lineHeight: 1.3 }}>
                    {nextPrayer.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>
                    متبقي: <strong>{nextPrayer.timeLeft}</strong>
                  </Typography>
                </Box>
              </Box>
            )}

            {/* عنوان المواقيت */}
            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                right: 12,
                textAlign: "right",
              }}
            >
              <Typography
                sx={{
                  m: 0,
                  color: "#F5F0E8",
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
                  fontWeight: 700,
                  textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                }}
              >
                مواقيت الصلاة اليوم
              </Typography>
              <Typography
                sx={{
                  m: 0,
                  color: "#F5F0E8",
                  fontSize: { xs: "0.8rem", sm: "0.95rem" },
                  fontWeight: 500,
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                الهجري: {getSurah?.date?.hijri?.date || "—"}
              </Typography>
              <Typography
                sx={{
                  m: 0,
                  color: "#F5F0E8",
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 0.5,
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                القاهرة - مصر <LocationOnIcon sx={{ fontSize: 16 }} />
              </Typography>
            </Box>
          </Box>

          {/* شبكة المواقيت */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(3, 1fr)",
                sm: "repeat(5, 1fr)",
              },
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            {getSurah?.timings ? (
              Object.entries(getSurah.timings)
                .filter(([name]) => ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(name))
                .map(([name, time]) => (
                  <Box
                    key={name}
                    sx={{
                      color: "#2F6F5E",
                      p: { xs: 1.2, sm: 1.8 },
                      borderRadius: 2.5,
                      background: "#E5F2ED",
                      border: "1px solid #e5e7eb",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                      {prayerNames[name]}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.85rem", sm: "1rem" }, mt: 0.3 }}>
                      {time}
                    </Typography>
                  </Box>
                ))
            ) : (
              <Typography sx={{ gridColumn: "1 / -1", textAlign: "center", color: "#666" }}>
                جاري تحميل المواقيت...
              </Typography>
            )}
          </Box>
        </Box>

        {/* كارت السور المفضلة */}
        <Box
          sx={{
            flex: { md: 0.7 },
            background: "#fff",
            borderRadius: 3,
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            p: 2.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "rgba(47, 111, 94, 0.95)",
              width: "100%",
              textAlign: "right",
              fontWeight: 800,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 0.5,
            }}
          >
            اقرأ سورتك المفضلة <AutoStoriesIcon sx={{ fontSize: 22 }} />
          </Typography>

          <Box component="img" src={IconImg} sx={{ width: { xs: 90, sm: 110 }, mb: 2 }} />

          <Box
            component="button"
            onClick={() => navigate("/Quran")}
            sx={{
              background: "linear-gradient(135deg, #2F6F5E, #1e4d42)",
              color: "white",
              border: "none",
              px: 3,
              py: 1.2,
              borderRadius: 2.5,
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(47, 111, 94, 0.3)",
              transition: "0.25s",
              width: "100%",
              maxWidth: 200,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(47, 111, 94, 0.4)",
              },
              "&:active": { transform: "scale(0.97)" },
            }}
          >
            قائمة السور
          </Box>
        </Box>

        {/* أدعية سريعة */}
        <Box
          sx={{
            flex: { md: 0.9 },
            background: "#fff",
            borderRadius: 3,
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography
            onClick={() => navigate("/DoaaCom")}
            sx={{
              color: "#2E73A8",
              cursor: "pointer",
              textAlign: "left",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            عرض الكل ←
          </Typography>

          {showDoaa?.slice(0, 3).map((p) => {
            const Icon = icons[p.icon] || AutoAwesomeIcon;
            return (
              <Box
                key={p.id}
                onClick={() => setShow(p.id)}
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  background: "#F8F0E3",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "0.25s",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": {
                    transform: isMobile ? "none" : "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                  },
                  "&:active": { transform: "scale(0.98)" },
                }}
              >
                <Icon sx={{ fontSize: 32, color: "#9A6F24", flexShrink: 0 }} />
                <Typography sx={{ color: "#2F6F5E", fontWeight: 600, fontSize: "0.9rem" }}>
                  {p.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ========== مودال الدعاء ========== */}
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
              width: { xs: "92%", sm: "80%", md: "50%" },
              maxWidth: 520,
              maxHeight: "85vh",
              overflowY: "auto",
              zIndex: 1000,
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
              }}
            >
              <CloseIcon />
            </IconButton>

            {(() => {
              const Icon = icons[selectedDoaa.icon] || AutoAwesomeIcon;
              return <Icon sx={{ fontSize: 50, color: "#9A6F24", mb: 2, mt: 1 }} />;
            })()}

            <Typography
              sx={{
                fontWeight: 700,
                textAlign: "center",
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                lineHeight: 1.8,
                color: "#2F6F5E",
                mb: 3,
              }}
            >
              {selectedDoaa.arabic}
            </Typography>

            <Box
              component="button"
              onClick={() => setShow(null)}
              sx={{
                px: 4,
                py: 1.3,
                border: "none",
                borderRadius: 3,
                background: "#2F6F5E",
                color: "white",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.25s",
                "&:hover": {
                  background: "#245a4c",
                  transform: "translateY(-2px)",
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