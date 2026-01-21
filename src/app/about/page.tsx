import type { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// กำหนด Metadata เฉพาะสำหรับหน้า About Us
export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'เรียนรู้เกี่ยวกับทีมงานและเทคโนโลยีที่เราใช้ในการพัฒนาเว็บแอปพลิเคชัน',
  openGraph: {
    title: 'เกี่ยวกับเรา | My Next.js App',
    description: 'เรียนรู้เกี่ยวกับทีมงานและเทคโนโลยีที่เราใช้',
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">เกี่ยวกับเรา</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>ภารกิจของเรา</CardTitle>
              <CardDescription>สร้างสรรค์เว็บแอปพลิเคชันที่ทันสมัยและมีคุณภาพ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600 leading-relaxed">
              <p>เราเชื่อว่าเว็บแอปพลิเคชันที่ดีต้องมีทั้งประสิทธิภาพและการออกแบบที่ดี ด้วย Next.js 16 เราสร้างเว็บไซต์ที่โหลดเร็วและทำงานราบรื่น</p>
              <p>การใช้ Tailwind CSS และ shadcn/ui ช่วยให้เราสร้าง UI ที่สวยงามและปรับแต่งง่าย</p>
            </CardContent>
          </Card>

          {/* Grid แสดงเทคโนโลยีและจุดเด่น */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>เทคโนโลยีที่ใช้</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-blue-500">▪</span> Next.js 16</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">▪</span> React Server Components</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">▪</span> Tailwind CSS</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader><CardTitle>จุดเด่น</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-green-500">✓</span> ประสิทธิภาพสูง</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">✓</span> SEO-friendly</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Responsive Design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}