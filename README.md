# Guide Board

Bu "Guide Board" loyihasining server va DB (Data Base) qismi. Loyiha "Gude Board UI" bilan birgalikda ishlaydi.

## "Guide Board" nimaga kerak?

Loyihada ikki turdagi foydalanuvchilar bo'ladi.

"admin" - administratorlar va "employee" - oddiy foydalanuvchilar.

Tasavvur qiling bir tashkilotning o'z ichki qoidalari mavjud. Barcha ishchilar u qoidalar bilan tanishib chiqishi kerak. Tashkilotda yangi qoida qabul qilinsa, barcha ishchilarni xabardor qilish kerak. Tashkilotga yangi xodim ishga kelsa uni barcha qoidalar bilan tanishtirib chiqish kerak. Yangi qoidani qabul qilish tanganing bir tomoni bo'lsa, qoida bilan ishchilar rostdan ham tanishib chiqqanini nazorat qilish tanganing ikkinchi tomoni. "Guide Board" shu muammoni hal qilishga ko'maklashadi.

### "admin" lar nima qila oladi?

Adminlar yangi chiqgan qoidalarni e'lon qiladi, uni tahrirlaydi, qoidalarni kerakli ishchilarga qayta jo'natadi, foydalanuvchi qo'shadi va uning ma'lumotlarini tahrirlaydi ("employee"dan farqli ravishda "admin"lar foydalanuvchining role hamda passwordini ham o'zgartira oladi), foydalanuvchini o'chiradi. Muhumi, foydalanuvchilar qoidalar bilan tanishib chiqgan yoki chiqmaganini nazorat qilib bora oladi.

### "employee" lar nima qila oladi?

Foydalanuvchilarda tashkilotning barcha qoidalarini ko'rish, o'ziga yuborilgan qoida bilan tanishib chiqish, qoida bilan tanishib chiqqanini tasdiqlash va o'z ma'lumotlarini tahrirlash imkoniyati mavjud.

### Foydalanuvchilar:
| role | username | password |
| --- | --- | --- |
| admin | admin | admin |
| employee | user | user |

## Loyiha qaysi texnologiyalar yordamida yasalgan?

### "Guide Board UI"
| Nomi | Foydalanishdan maqsad |
| --- | --- |
| React JS | Umumiy |
| SASS/SCSS | Style component |
| Axios | Serverga so'rov yuborish |
| react-redux (toolkit) | Store yasash |
| react-toastify | Xabarnomalar |

### "Guide Board DB"
| Nomi | Foydalanishdan maqsad |
| --- | --- |
| Node JS | Umumiy |
| Express JS | Server yasash |
| Knex JS | Query builder |
| PostgreSQL | Ma'lumotlar ombori |
| bcryptjs | Passwordni hashlash |
| jsonwebtoken | Token yasash |
| joi | Validatsiya qilish |