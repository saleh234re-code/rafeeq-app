import { useContext, useState } from "react";
import { AdkarContext } from "../Context/ShowAdkar";
import Backgrounded from "../images/ChatGPT Image Sep 16, 2026, 07_54_16 PM.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Adkaer() {
  const [Show, setShow] = useState(null);

  const { showAdkar } = useContext(AdkarContext);

   
  const selectedAdkar = showAdkar.find((p) => p.id === Show);

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f6efe4",
      }}
    >
       
      <img
        alt="أذكار"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "15px",
        }}
        src={Backgrounded}
      />

      {/* قائمة الأذكار */}
      <Box
        sx={{
          width: "100%",
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          boxSizing: "border-box",
        }}
      >
        {showAdkar.map((p) => (
          <Box
            key={p.id}
            onClick={() => setShow(p.id)}
            sx={{
              color: "#9A6F24",
              p: 3,
              width: "min(400px, 90%)",
              borderRadius: 4,
              background: "#F8F0E3",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {p.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* شاشة الذكر */}
      {selectedAdkar && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#F8F0E3",

            display: "flex",
            flexDirection: "column",

            overflowY: "auto",
          }}
        >
          {/* الهيدر */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 2,

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              p: 2,

              background: "rgba(248,240,227,0.95)",
              backdropFilter: "blur(10px)",

              borderBottom: "1px solid #e5d8c5",
            }}
          >
            <Typography
              sx={{
                color: "#9A6F24",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {selectedAdkar.title}
            </Typography>

            <button
              onClick={() => setShow(null)}
              style={{
                border: "none",
                background: "#9A6F24",
                color: "white",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </Box>

          {/* محتوى الأذكار */}
          <Box
            sx={{
              width: "min(900px, 92%)",
              margin: "30px auto",
              paddingBottom: "50px",
            }}
          >
            {selectedAdkar.items.map((item, index) => (
              <Box
                key={item.id}
                sx={{
                  background: "#fffaf3",
                  borderRadius: 4,
                  padding: {
                    xs: 2,
                    md: 4,
                  },
                  marginBottom: 3,

                  border: "1px solid #eadfce",

                  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                }}
              >
                {/* رقم الذكر */}
                <Typography
                  sx={{
                    color: "#9A6F24",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  {index + 1}
                </Typography>

                {/* عنوان الذكر */}
                <Typography
                  sx={{
                    color: "#76551d",
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  {item.title}
                </Typography>

                {/* نص الذكر */}
                <Typography
                  sx={{
                    color: "#3f3a32",

                    fontSize: {
                      xs: "21px",
                      md: "27px",
                    },

                    lineHeight: 2.2,

                    textAlign: "right",

                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {item.text}
                  
                </Typography>
                <Typography
                  sx={{
                    color: "#3f3a32",

                    fontSize: {
                      xs: "21px",
                      md: "27px",
                    },

                    lineHeight: 2.2,

                    textAlign: "right",

                    fontFamily: "Arial, sans-serif",
                  }}
                >
                   عدد المرات : {item.count}
                  
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}