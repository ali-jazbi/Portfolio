# پرامپت اجرایی برای Codex — طراحی و توسعه پورتفولیوی Ali Jazbi

## مأموریت
تو نقش یک **Senior Frontend Engineer + UI Engineer + Accessibility Reviewer** را داری. هدف، پیاده‌سازی یک پورتفولیوی انگلیسی حرفه‌ای و چندصفحه‌ای برای **Ali Jazbi** است که هم برای استخدام Front-End Developer و هم Full-Stack Developer مناسب باشد. خروجی باید از نظر UI، UX، سرعت، ریسپانسیو بودن، خوانایی و صحت اطلاعات قابل دفاع باشد؛ نه یک سایت نمایشی پر از تزئینات تکراری.

**مهم: تصاویر مرجع داخل پوشه `design-reference/` و فایل‌های HTML/CSS در `design-reference/source/` قرار می‌گیرند.** تصاویر، هدف بصری طراحی هستند، نه محتوایی که به‌صورت یک عکس ثابت به‌عنوان کل صفحه استفاده شود. همه قسمت‌ها باید به کامپوننت‌ها و مارکاپ واقعی HTML تبدیل شوند. فایل‌های `source/` فقط مرجع قابل‌اندازه‌گیری و راهنمای رفتار هستند؛ آزاد هستی آن‌ها را در معماری اصولی Next.js بازسازی کنی، نه اینکه آن‌ها را به‌عنوان خروجی نهایی بدون بازبینی کپی کنی.

### ۱. اولین قدم‌ها
1. اول مخزن فعلی را بررسی کن؛ ساختار پروژه، نسخه Next.js، تنظیمات TypeScript، Tailwind، کامپوننت‌ها و پکیج‌ها را شناسایی کن. اگر ریپو خالی بود، پروژه مناسب بساز. اگر از قبل پروژه وجود دارد، **بدون اجازه فایل‌ها یا امکانات موجود را پاک نکن**.
2. همه فایل‌های PNG مرجع را باز کن؛ اگر ابزار vision یا screenshot داری، آن‌ها را **تک‌تک** در دسکتاپ و موبایل بررسی کن؛ صرفاً بر اساس نام فایل قضاوت نکن.
3. برای هر صفحه ساختار سکشن‌ها و طرح کلی را مشخص کن؛ سپس طراحی را صفحه‌به‌صفحه پیاده‌سازی کن. سؤال غیرضروری نپرس؛ فقط برای داده‌هایی که منتشرکردنشان بدون تأیید درست نیست، از placeholder شفاف استفاده کن.
4. هدف، **کیفیت تولیدی** است. استفاده از AI نباید به ظاهر سایت قابل تشخیص باشد: کارت‌های شیشه‌ای تصادفی، گرادیان‌های بنفش/آبی کلیشه‌ای، انیمیشن بی‌دلیل، Fake Metrics، ایموجی‌های زیاد، تصاویر آدم‌های ساختگی و متن‌های تبلیغاتی عمومی ممنوع‌اند.

### ۲. فایل‌های مرجع و نگاشت مسیرها

| آدرس نهایی | دسکتاپ | موبایل |
| --- | --- | --- |
| `/` | `desktop/01-home.png` | `mobile/01-home.png` |
| `/work` | `desktop/02-work.png` | `mobile/02-work.png` |
| `/work/healthcare-dashboards` | `desktop/03-healthcare-case.png` | `mobile/03-healthcare-case.png` |
| `/work/parin-sanat` | `desktop/04-parin-case.png` | `mobile/04-parin-case.png` |
| `/about` | `desktop/05-about.png` | `mobile/05-about.png` |
| `/contact` | `desktop/06-contact.png` | `mobile/06-contact.png` |

`desktop-overview.png` و `mobile-overview.png` برای مرور سریع کل سیستم طراحی هستند، ولی **اسکرین‌شات تمام‌صفحه هر مسیر** مرجع اصلی است. اگر جزئیات رندر فایل HTML با تصویر خروجی متفاوت بود، نسخه تصویری آخرین مرجع چیدمان است. اندازه مرجع دسکتاپ ۱۴۴۰ پیکسل و موبایل ۳۹۰ پیکسل است؛ در عرض‌های ۳۲۰، ۳۷۵، ۴۲۵، ۷۶۸، ۱۰۲۴ و ۱۹۲۰ هم خروجی باید منطقی باشد.

### ۳. هویت بصری و Design Tokens
- زبان محتوا: **انگلیسی**؛ پرامپت و توضیحات داخلی می‌توانند فارسی باشند.
- سبک: **Modern Editorial / Product-Focused Portfolio**؛ تأثیر از Mehdi Karami در تایپوگرافی و معرفی پروژه، از Zack Webster در معرفی شخصی، از refact0r در حس توسعه‌دهنده‌محور، و از Abdalla Elradi در micro-interactions محدود. کپی پیکسلی هیچ سایت خارجی انجام نشود.
- پس‌زمینه اصلی: `#F6F6F3` (سفید گرم)
- سطوح: `#FFFFFF`
- متن اصلی: `#171A1D`
- متن ثانویه: `#626B72`
- Border: `#DCE0DF`
- رنگ تأکید: `#2365EE`، در حد لینک‌ها، شماره‌ها و کنترل‌های ضروری؛ نه اشباع کل صفحه.
- سکشن تیره: `#151A1E` / کارت dark project: `#202934`
- زمینه پروژه Parin Sanat: کرم خاکی ملایم مانند مرجع `#E6DED3`.
- فونت: یک Sans خوانا و حرفه‌ای مشابه **Inter / Inter Display**؛ وزن‌های محدود و واقعی، بدون لود چندین خانواده فونت. برای شبیه‌سازی بخش‌های فنی از monospace محدود استفاده کن.
- متن Hero با letter spacing حساب‌شده، اندازه بزرگ اما responsive؛ از `clamp()` و واحدهای fluid استفاده کن؛ هیچ عنوانی در موبایل از کادر بیرون نزند.
- Radius‌ها عموماً ۴ تا ۸ پیکسل، نه ۲۰ تا ۳۲ پیکسل. Shadow بسیار محدود فقط در mockupهای رابط کاربری.
- Grid حداکثر عرض حدود `1300px` و فاصله افقی مناسب؛ برای دسکتاپ حاشیه‌ای نزدیک ۵۲px و برای موبایل حدود ۱۹px. ریتم عمودی صفحات را مطابق تصاویر حفظ کن.
- تصاویر نمونه داشبورد و فروشگاه **real screenshot نیستند**؛ صرفاً المان طراحی جایگزین موقت‌اند. این موضوع را در کد/محتوا مشخص نگه دار.

### ۴. اطلاعات واقعی صاحب سایت
- Name: **Ali Jazbi**
- Location: **Tehran, Iran**
- Professional positioning: **Frontend-Focused Full-Stack Developer**
- Frontend strengths: React.js, Next.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Material UI, Ant Design, Bootstrap.
- Backend: Node.js, Express.js, REST APIs, API integration, authentication.
- Project-associated tooling: Prisma, PostgreSQL, SQL Server integrations, Git, GitHub, IIS, PM2, Docker, Vercel.
- Email: **ali.jazbi@yahoo.com**
- GitHub: **https://github.com/ali-jazbi**
- LinkedIn: **https://linkedin.com/in/ali-jazbi**
- Education: Computer Engineering, Shahid Beheshti University (اگر لازم است به‌صورت Student ذکر شود؛ تاریخ یا مدرک نهایی نساز).

**چیزهایی که نباید جعل شوند:** Senior یا Mid-level قطعی؛ تعداد سال‌های تجربه دقیق و به‌روزرسانی‌نشده؛ تعداد مشتری؛ نرخ تبدیل؛ درصد رشد سرعت؛ امتیاز Lighthouse؛ مالکیت کامل معماری دیتابیس؛ نام یا عکس واقعی بیماران؛ موفقیت‌های اثبات‌نشده؛ Testimonials ساختگی؛ لینک ریپازیتوری یا وب‌سایت ناموجود؛ عکس چهره غیرواقعی به‌عنوان Ali.

### ۵. اطلاعات پروژه‌ها و سوابق

**Dotr / فناوری هوشمند داتار**
- Jan 2025 — Present؛ ابتدا Frontend Developer، سپس مسئولیت‌های Full-Stack نیز اضافه شده‌اند. تاریخ دقیق تغییر نقش هنوز مشخص نشده؛ تاریخ دلخواه نساز.
- توسعه داشبوردها و سامانه‌های درمانی برای پروژه‌های مرتبط با **Shahid Beheshti University of Medical Sciences (SBMU)**. نام کارفرما باید Dotr باشد؛ نباید طوری نوشته شود که به‌طور مستقیم کارمند دانشگاه بوده.
- مسئولیت‌ها: رابط کاربری React/Next.js، TypeScript، داشبوردها، اتصال به APIها، بعضی سرویس‌های backend با Node.js/Express.js، تعامل با تیم.
- مدیریت یا طراحی اصلی دیتابیس به عهده Ali نبوده؛ چنین ادعایی نکن.
- هر تصویر واقعی از پروژه فقط با اجازه انتشار؛ اطلاعات بیمار، اطلاعات داخلی دانشگاه، IPها، نام کاربران، داده‌های سازمانی یا credential باید حذف شوند.

**Parin Sanat / پارین صنعت**
- مدت همکاری: **۴ ماه**؛ تاریخ شروع/پایان دقیق اعلام نشده.
- Title: Frontend Developer.
- مسئولیت: **بازطراحی کامل فرانت‌اند فروشگاه آنلاین و پنل ادمین**. در متن تأکید کن این کار Full Frontend Redesign بوده.
- بدون اطلاعات تکمیلی ادعا نکن که UX research یا طراحی اولیه Figma هم کاملاً با او بوده. بدون عدد اثبات‌نشده حرفی از رشد فروش یا Performance gain نزن.

**Behbod Shop**
- پروژه شخصی Full-Stack E-commerce با Next.js 16، Prisma و PostgreSQL؛ اگر قرار است لینک به دمو قرار دهی ابتدا صحت دسترسی آن را بررسی کن. آدرس شناخته‌شده: `https://behbod-shop.vercel.app`، ولی نباید بدون بررسی آن را قطعی/در دسترس معرفی کرد.

**Survey Platform**
- پروژه رابط کاربری با React و Ant Design؛ Form Builder، سؤالات شرطی، فرم‌های مرحله‌ای، پنل و آپلود Excel. وضعیت عمومی بودن پروژه یا دسترسی به کد معلوم نیست؛ از `Coming soon` یا بدون لینک استفاده کن.

### ۶. دستورالعمل هر صفحه

**Home (`/`)**
1. هدر سبک و یکپارچه شامل لوگوی متنی `AJ.`، لینک‌های Home / Work / About / Contact و اطلاعات موقعیت (Tehran, Iran) در دسکتاپ.
2. Hero مشابه `01-home.png`: تیتر بزرگ و چپ‌چین، متن کوتاه و دو CTA اصلی: `Explore selected work` و `About me`. جمله مرجع: `Frontend first. Full-stack in practice.`؛ در نسخه نهایی حق داری جمله را اندکی طبیعی‌تر کنی، ولی بدون شعارهای بازاریابی.
3. سمت راست Hero یک mockup داشبورد کم‌جزئیات و **illustrative** قرار بده. عکس ساختگی آدم یا صفحه‌نمایش حاوی کد تصادفی استفاده نکن.
4. ردیف فشرده تکنولوژی‌های کلیدی، نه دیوار آیکون.
5. بخش Selected Work: پروژه Healthcare با پس‌زمینه تیره و تصویر بزرگ، Parin Sanat با زمینه کرم، سپس Behbod Shop و Survey Platform در کارت‌های خلاصه‌تر.
6. بخش About تیره با دو گروه مهارت Frontend و Backend؛ سپس Experience خلاصه و Footer.

**Work (`/work`)**
1. Hero متن‌محور با `A collection of real-world work.`
2. چهار پروژه با ترتیب: Healthcare Dashboards، Parin Sanat، Behbod Shop، Survey Platform.
3. فیلترهای `All projects / Professional / Personal` **واقعاً کار کنند** و با `aria-pressed` یا حالت مناسب قابل دسترس باشند.
4. برای دو پروژه اصلی مسیر Case Study واقعی بساز؛ برای پروژه‌هایی که هنوز Case Study ندارند لینک مرده `#` یا دکمه‌ی نمایشی نگذار.
5. نمایش پروژه‌ها باید در دسکتاپ دو ستونه متن/تصویر و در موبایل تک ستونه و به ترتیب خواندن صحیح باشد.

**Healthcare Case Study (`/work/healthcare-dashboards`)**
- Hero شامل Context, Association, Role, Tools و تصویر Concept با هشدار واضح demo/anonymized.
- سپس Context، Responsibilities، Engineering و Next Project.
- توضیح‌ها مبتنی بر مسئولیت‌های واقعی باشند؛ هیچ رکورد بیمار یا KPI خیالی منتشر نشود.
- در محتوا برای ارتباط با دانشگاه از عبارت `projects associated with Shahid Beheshti University of Medical Sciences` استفاده کن.

**Parin Sanat Case Study (`/work/parin-sanat`)**
- Hero، اطلاعات پروژه و ۴ ماه همکاری.
- تأکید بر فروشگاه و پنل ادمین به‌عنوان دو محصول و تجربه واحد.
- بخش scope و deliverables با بیان دقیق frontend redesign؛ از ادعای impact بدون داده بپرهیز.
- تصویر Before/After را فقط پس از دریافت اسکرین‌شات واقعی و مجاز بساز.

**About (`/about`)**
- Hero editorial با تأکید بر مسیر رشد از Frontend به Full-Stack.
- محفظه تصویر چهره `AJ.` فعلاً Placeholder باشد؛ هرگز تصویر یک شخص مصنوعی را به نام Ali منتشر نکن.
- یک بخش Approach یا Engineering mindset، دسته‌بندی Skills و تایم‌لاین تجربه کاری.
- تاریخ Parin Sanat و زمان تغییر نقش در Dotr باید placeholders قابل‌تغییر بمانند.

**Contact (`/contact`)**
- Hero واضح با `Have a project or role in mind? Let's talk.`
- راه‌های تماس مستقیم: Email، LinkedIn، GitHub. لینک‌ها واقعی و کارا باشند.
- فرم تماس لازم نیست؛ صرفاً برای پرکردن صفحه فرم بی‌استفاده اضافه نکن.

### ۷. معماری فنی
- اگر مخزن جدید است از **Next.js App Router + TypeScript + Tailwind CSS** استفاده کن. اگر نسخه پایدار/قابل‌استفاده پروژه 16 است، نسخه 16 را نگه دار؛ مهاجرت بی‌دلیل انجام نده.
- ساختار پیشنهادی:
  - `app/page.tsx`
  - `app/work/page.tsx`
  - `app/work/[slug]/page.tsx` (از داده ساختاریافته Case Study)
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `components/layout/` شامل Header، MobileNav، Footer
  - `components/ui/` شامل Button، Eyebrow، SectionHeading، Tag
  - `components/projects/` شامل ProjectCard، ProjectPreview، CaseStudySection
  - `data/projects.ts`, `data/experience.ts`, `data/profile.ts`
  - `public/images/projects/` برای اسکرین‌شات‌های تأییدشده و placeholderها
- Server Components را پیش‌فرض نگه دار؛ Client Components را فقط برای فیلتر و منو و تعاملات لازم استفاده کن.
- داده‌های پروژه، نام‌ها، تکنولوژی‌ها و لینک‌ها در فایل‌های data مرکزی باشند، نه هاردکد تکراری در چند صفحه.
- اگر کتابخانه Motion از قبل موجود نیست، فقط در صورت نیاز واقعی و بعد از مقایسه هزینه/فایده اضافه کن. برای hoverهای ساده CSS کافی است.
- از کتابخانه سنگین سه‌بعدی، Video background، پیغام‌های toast غیرضروری و افکت‌های اسکرولِ دائم استفاده نکن.

### ۸. ریسپانسیو، دسترس‌پذیری و Performance
- موبایل واقعی: عرض‌های 320/375/390/425؛ تبلت 768/1024؛ دسکتاپ 1440/1920. بدون horizontal scrolling یا text clipping.
- MobileNav باید باز و بسته شود، دکمه واقعی داشته باشد و `aria-expanded`، keyboard focus و ترتیب درست داشته باشد.
- از تگ‌های معنایی `header`, `nav`, `main`, `section`, `article`, `footer` استفاده کن. یک `h1` برای هر صفحه؛ بقیه عنوان‌ها سلسله‌مراتب درست داشته باشند.
- نسبت کنتراست متن رعایت شود؛ متن‌های ثانویه بیش‌ازحد کم‌رنگ نباشند.
- در تعاملات hover، نسخه keyboard/focus و touch نیز درست کار کند.
- تصاویر از `next/image` و سایزهای responsive بهره ببرند؛ برای تصاویر تزئینی `alt=""` و برای تصویر محتوایی alt معنی‌دار.
- انیمیشن‌ها کم‌دامنه، معمولاً 140–260ms؛ `prefers-reduced-motion` رعایت شود. اسکرول‌انیمیشن برای خواندن محتوا مانع نباشد.
- هدف بهینه‌سازی Core Web Vitals: LCP نزدیک/کمتر از ۲.۵ ثانیه، INP نزدیک/کمتر از ۲۰۰ms و CLS نزدیک/کمتر از ۰.۱ در شرایط سنجش واقعی؛ **هرگز بدون اندازه‌گیری ادعای دستیابی نکن**.
- متادیتای اختصاصی برای هر صفحه، Open Graph Image مناسب، Sitemap، robots و canonical در صورت مشخص بودن دامنه.

### ۹. روال اجرا و کنترل کیفیت
1. **Baseline:** ساختار موجود و dependencyها را بررسی کن و نتیجه را خلاصه کن.
2. **Tokens:** رنگ، تایپوگرافی، Container، Spacing، Button، Header و Footer را بساز.
3. **Page by page:** به ترتیب Home → Work → Healthcare Case → Parin Case → About → Contact پیاده‌سازی کن. برای هر بخش، اول تطابق بصری و بعد جزئیات محتوا و رفتار را کنترل کن.
4. **Responsive:** رندر هر شش صفحه را در عرض 1440 و 390 بگیر؛ اگر browser automation موجود است PNG full-page در `artifacts/screenshots` بساز.
5. **Visual QA:** تصاویر خروجی را کنار فایل‌های مرجع قرار بده؛ فاصله‌های اصلی، اندازه تایپوگرافی، رنگ، alignment، ارتفاع سکشن‌ها، شکست خط و محتوای دو ستون را مقایسه کن. صرفاً ادعای «مشابه» کافی نیست؛ خطاهای دیده‌شده را اصلاح کن.
6. **Functional QA:** تمام لینک‌ها، دکمه‌ها، فیلتر پروژه‌ها، MobileNav، Email و مسیرها را تست کن. کلیک‌های بی‌عملکرد ممنوع.
7. **Engineering QA:** `npm run lint`، `npm run build` و اگر تست وجود دارد اجرا کن. Error و Warningها را گزارش و تا جای ممکن رفع کن.
8. **Content QA:** برای همه موارد نامشخص یک فهرست `Needs confirmation` ارائه کن: تاریخ دقیق Parin Sanat، تاریخ تبدیل نقش به Full-Stack، تصاویر و اجازه انتشار، لینک‌های واقعی پروژه‌ها و عکس شخصی.

### ۱۰. خروجی مورد انتظار
- کد تمیز و قابل نگه‌داری، نه خروجی صرفاً نمایشی.
- تمام مسیرهای بالا با نسخه Desktop و Mobile و هویت بصری واحد.
- اجزای UI قابل‌استفاده مجدد و ساختار داده مرکزی.
- یک `README.md` شامل دستورات نصب، اجرا، build و محل جایگزینی تصاویر.
- فهرست دقیق فایل‌های تغییرکرده، تست‌های انجام‌شده و موارد نیازمند تأیید.
- در پایان، از وضعیت واقعی پروژه گزارش بده؛ انجام کاری را که تست نکرده‌ای تأییدشده اعلام نکن.

**شروع کن: ابتدا فایل‌های مرجع و ساختار ریپو را بررسی کن، سپس بدون ساختن قالب‌های عمومی AI، پیاده‌سازی واقعی را مرحله‌به‌مرحله انجام بده.**
