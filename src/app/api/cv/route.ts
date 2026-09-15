import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Muhammad_Umer_Aziz_CV.pdf");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "CV file not found" }, { status: 404 });
  }

  // Fire non-blocking download notification if Formspree endpoint exists
  const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;
  if (formspreeKey) {
    fetch(`https://formspree.io/f/${formspreeKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "CV Download",
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Muhammad_Umer_Aziz_CV.pdf"',
    },
  });
}
