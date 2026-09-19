import { useEffect } from "react";
import { Box } from "@mui/material";

export default function AdSense({ slot = "3331557063", style = {} }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        my: 1.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        minHeight: 90,
        maxHeight: 120,          // ← يمنع المساحة الكبيرة
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          maxHeight: "120px",
          overflow: "hidden",
        }}
        data-ad-client="ca-pub-7114645931029541"
        data-ad-slot={slot}
        data-ad-format="horizontal"   // ← أفضل من auto
        data-full-width-responsive="true"
      />
    </Box>
  );
}