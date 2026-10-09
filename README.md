# TrendRadar AI (Clone / Marketplace Intelligence)

ระบบเรดาร์วิเคราะห์โอกาสสินค้า Shopee Feed + Meta Affiliate ที่ถอดแบบและจำลองมาจากเว็บ [TrendRadar AI Web](https://trendradar-ai-web.vercel.app/) อย่างครบถ้วนทุกรายละเอียด

## ✨ จุดเด่นและฟังก์ชันที่ทำเหมือนต้นฉบับ 100%

1. **ดีไซน์และธีม (Pixel-Perfect UI/UX)**:
   - ใช้สไตล์ชีตและ Design Tokens ดั้งเดิม (`style.css`)
   - ฟอนต์มาตรฐานระดับมืออาชีพ `Inter` และ `Noto Sans Thai`
   - แถบเมนูด้านซ้าย (Sidebar) แบ่งตาม 5 หมวดหมู่: **ค้นหา**, **วิเคราะห์**, **วางแผน**, **จัดการ**, **ช่วยเหลือ** พร้อมครบทั้ง 18 เมนู
   - กล่อง Pro Plan แบบพับเปิด-ปิดได้ พร้อมแถบเครดิตการใช้งาน (12,450 / 20,000)

2. **แถบส่วนหัวด้านบน (Interactive Topbar)**:
   - กล่องค้นหาแบบ Real-time พร้อมปุ่มล้างคำค้นหา (X) และปุ่มค้นหา
   - ปุ่มเลือกแหล่งข้อมูล **Shopee Feed** (พร้อมสัญลักษณ์ตัว S สีส้ม)
   - ชิปแสดงรอบข้อมูลล่าสุด (อัปเดตตามจำนวนสินค้าใน Store)
   - **นาฬิกา Live Clock**: เดินสดทุกวินาทีตามเขตเวลา `Asia/Bangkok` แสดงเวลาและวันที่ทั้งแบบไทยและสากล
   - **ปุ่มสลับภาษา TH / EN**: เปลี่ยนภาษาหัวข้อ เมนู แถบควบคุม และข้อมูลได้ทันทีแบบ Dynamic
   - ปุ่มส่งออกรายงาน และปุ่มกระดิ่งแจ้งเตือน (Toast Notification)
   - รูปโปรไฟล์และชื่อเจ้าของระบบ (Wansavang / Owner)

3. **หน้าภาพรวมเรดาร์ (Overview)**:
   - แบนเนอร์เรดาร์พร้อมแอนิเมชันเส้นเรดาร์หมุนสแกน (Rotating sweep needle & pulsing radar blips)
   - กล่องสรุปสถานะสถิติ 6 กล่อง (สินค้าที่จัดเก็บ, พร้อมทำแอด, พร้อมทำคอนเทนต์, เฝ้าดู, คะแนนเฉลี่ย, แถวที่ข้าม)
   - กระดานจำแนกโอกาสสินค้า (Today Product Opportunities) 4 หมวด
   - **ตารางสินค้าเด่น (Featured Products Table)**: แสดงอันดับ, รูปภาพสินค้า, ชื่อสินค้า, แพลตฟอร์ม, คะแนน Opportunity Score, ราคา, ยอดขาย, เรตติ้ง, ค่าคอมมิชชัน, Pain point, และปุ่มรูปดวงตาสำหรับกดเข้าไปดูข้อมูล
   - **Opportunity Matrix & Category Bar Switcher**: กราฟเมทริกซ์กระจายตัว (Scatter Plot) เปรียบเทียบ Score vs Sold และกราฟแท่งสถิติหมวดหมู่สินค้า
   - 3 แผงจัดอันดับ (สินค้าคะแนนสูง, เหตุผลคะแนน, มุมต่อยอด)
   - แผง **AI Next Actions** พร้อมปุ่มลัดไปยังโมดูลต่างๆ

4. **หน้ารายละเอียดสินค้าแบบเจาะลึก (Product Drawer Modal)**:
   - **"แม้กระทั่งการกดเข้าไปดูข้อมูล"**: คลิกที่สินค้าใดๆ จากตาราง, การ์ดโอกาส หรือกราฟ จะมีแถบ Drawer เลื่อนออกมาจากทางขวา
   - แสดงภาพสินค้า, หมวดหมู่, คะแนน Opportunity Score แบบเจาะลึก
   - ค่าสถิติ 4 มิติ: ราคา, ยอดขาย, เรตติ้ง, Pain point
   - **AI Readout**: เหตุผลที่สินค้านี้มีศักยภาพ และจุดที่ต้องระวัง
   - **Score Breakdown**: แจกแจงคะแนนจาก Shopee Base Score, Meta Signal Boost, Commission Fit, Current Angle
   - **Next Action**: ปุ่มทำ Ads Angle, สร้าง Content Plan, ทำ Offer, บันทึกไว้ใน Pipeline

5. **โมดูลการทำงานอื่นๆ ครบวงจร**:
   - **ค้นหาโอกาสสินค้า (Product Finder)**: ค้นหา, กรองสถานะ, จัดเรียงลำดับ, เลือกสินค้าหลายรายการพร้อมกัน (Bulk Action), บันทึกเข้า Pipeline
   - **สินค้าที่บันทึกไว้ (Saved Products)**: กระดาน Pipeline Kanban 4 ขั้นตอน (Watchlist, Ready for Content, Ready for Ads, Offer Draft) และตัวอย่างแผนการขายที่สร้างโดยอัตโนมัติ
   - **ตลาด / ร้าน / ครีเอเตอร์ (Market Density)**: วิเคราะห์ความหนาแน่นของการแข่งขัน
   - **แหล่งสัญญาณ FB/IG (Signal Sources)**: สัญญาณคีย์เวิร์ดและแฮชแท็กโซเชียล
   - **เชื่อมต่อข้อมูล (Data Connections)**: หน้าอัปโหลดไฟล์ Shopee CSV (รองรับ Drag & Drop ไฟล์จริง) พร้อมปุ่มดาวน์โหลดตัวอย่าง CSV
   - **Content Tracker, AI Insight, Ads Intelligence, Offer Builder, Content Planner, Outreach Message, Reports, Settings, Installation Guide, User Manual, Pricing / License**

---

## 🚀 วิธีเปิดใช้งาน

### วิธีที่ 1: ดับเบิลคลิกเปิดโดยตรง (ไม่ต้องติดตั้งโปรแกรมใดๆ)
1. เข้าไปที่โฟลเดอร์:
   `C:\Users\Muilliwzy\.gemini\antigravity-ide\scratch\trendradar-clone`
2. ดับเบิลคลิกที่ไฟล์ **`index.html`** เพื่อเปิดบน Google Chrome หรือ Edge ได้ทันที!

### วิธีที่ 2: รันผ่าน Local Web Server (พอร์ต 3000)
1. ดับเบิลคลิกที่ไฟล์ **`start.bat`** (หรือคลิกขวาที่ `serve.ps1` แล้วเลือก Run with PowerShell)
2. ระบบจะเปิดเว็บเบราว์เซอร์ไปที่ `http://localhost:3000/` โดยอัตโนมัติ
