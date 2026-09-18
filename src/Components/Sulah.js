import { useContext } from 'react'
import { SulahContext } from '../Context/Sulah'
import Background from "../images/cale.png"

export default function Sulah() {
  const { getSurah } = useContext(SulahContext)

  if (!getSurah) {
    return (
      <div style={{ 
        textAlign: "center", 
        padding: "50px", 
        fontSize: "18px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        جاري تحميل المواقيت...
      </div>
    )
  }

  const prayers = [
    { key: "Fajr", name: "الفجر", icon: "🌅" },
    { key: "Dhuhr", name: "الظهر", icon: "☀️" },
    { key: "Asr", name: "العصر", icon: "🌤️" },
    { key: "Maghrib", name: "المغرب", icon: "🌇" },
    { key: "Isha", name: "العشاء", icon: "🌙" },
  ]

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#f5f7fa",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "30px"
    }}>
      
      {/* الصورة + التاريخ والدولة فوقها */}
      <div style={{ position: "relative", width: "100%" }}>
        <img
          alt="mosque"
          src={Background}
          style={{
            height: "280px",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay فوق الصورة */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
            color: "white",
            padding: "30px 25px 22px",
            textAlign: "left",
          }}
        >
          <h2 style={{ 
            margin: "0 0 8px", 
            fontSize: "26px",
            fontWeight: "700" 
          }}>
            {getSurah.date?.readable}
          </h2>

          <p style={{ 
            margin: "0 0 6px", 
            fontSize: "17px",
            opacity: 0.95 
          }}>
            الهجري: {getSurah.date?.hijri?.date}
          </p>

          <p style={{ 
            margin: 0, 
            fontSize: "17px",
            opacity: 0.95,
            fontWeight: "600"
          }}>
            📍 القاهرة، مصر
          </p>
        </div>
      </div>

      {/* بوكس مواقيت الصلاة */}
      <div
        style={{
          margin: "20px 15px",
          background: "#ffffff",
          borderRadius: "18px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
          padding: "8px 0 5px",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            margin: "12px 0 8px",
            color: "#1a5f4a",
            fontSize: "19px",
            fontWeight: "700",
          }}
        >
          مواقيت الصلاة
        </h3>

        {prayers.map((p, index) => (
          <div
            key={p.key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 22px",
              borderBottom: index !== prayers.length - 1 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "24px" }}>{p.icon}</span>
              <span style={{ fontSize: "18px", fontWeight: "600", color: "#222" }}>
                {p.name}
              </span>
            </div>

            <span
              style={{
                fontSize: "17px",
                fontWeight: "700",
                color: "#1a5f4a",
                background: "#e8f5f0",
                padding: "6px 14px",
                borderRadius: "20px",
                minWidth: "70px",
                textAlign: "center",
              }}
            >
              {getSurah.timings?.[p.key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}