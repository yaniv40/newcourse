import React from 'react'

export default function Details() {

 
  const course = [
    {
      session: 1,
      topic: 'מבוא לעיצוב גרפי',
      duration: 4.5,
      objectives: 'הבנת משמעות העיצוב הגרפי והכרת העקרונות הבסיסיים  ',
      software: ''
    },
    {
      session: 2,
      topic: 'יסודות בעיצוב גרפי',
      duration: 4.5,
      objectives: 'שימוש בכלים ותוכנות לעיצוב גרפי והדרך להתנהל בסביבת עבודה עיצובית',
      software: 'Adobe Photoshop, Adobe Illustrator'
    },
    {
      session: 3,
      topic: 'עיצוב צבעים וטכניקות',
      duration: 4.5,
      objectives: 'השפעת הצבעים בעיצוב וקבלת טכניקות לבחירתם',
      software: 'Adobe Photoshop, Adobe Illustrator'
    },
    {
      session: 4,
      topic: 'עיצוב טיפוגרפי',
      duration: 4.5,
      objectives: 'השימוש בטיפוגרפיה בעיצוב גרפי ומטרתה',
      software: 'Adobe Illustrator, Adobe InDesign'
    },
    {
      session: 5,
      topic: 'עיצוב למדיה חברתית',
      duration: 4.5,
      objectives: 'עיצוב גרפי למדיה חברתית, עיצוב גרפי לצורך פרסום ברשתות החברתיות',
      software: 'Adobe Photoshop, Adobe Illustrator'
    },
    {
      session: 6,
      topic: 'עיצוב אייקונים ותמונות',
      duration: 4.5,
      objectives: 'טכניקות עיצוב אייקונים ותמונות',
      software: 'Adobe Illustrator, Figma'
    },
    {
      session: 7,
      topic: 'עיצוב תפריטים וממשקי ניווט',
      duration: 4.5,
      objectives: 'עיצוב תפריטים וממשקי ניווט',
      software: 'Adobe Photoshop, Adobe Illustrator, Figma'
    },
    {
      session: 8,
      topic: 'עיצוב אתרים',
      duration: 4.5,
      objectives: 'עיצוב חווית משתמש (UX) וממשק משתמש (UI)עיצוב לאתרים',
      software: 'Adobe XD, Sketch, Figma'
    },
    {
      session: 9,
      topic: 'עיצוב אפליקציות לניידים',
      duration: 4.5,
      objectives: 'עיצוב חווית משתמש (UX) וממשק משתמש (UI)עיצוב אפליקציות ',
      software: 'Adobe XD, Sketch, Figma'
    },
    {
      session: 10,
      topic: 'פריסת עיצוב והכנת קבצים להדפסה',
      duration: 4.5,
      objectives: 'פריסת עיצוב גרפי עבור הדפסה והכנת קבצים ',
      software: 'Adobe InDesign, Adobe Illustrator'
    },
    {
      session: 11,
      topic: 'איור דיגיטלי',
      duration: 4.5,
      objectives: 'הכרת טכניקות האיור הדיגיטלי ושימוש בכלים מתאימים',
      software: 'Adobe Illustrator, Procreate'
    },
    {
      session: 12,
      topic: 'עיצוב פוסטרים וחומרי שיווק',
      duration: 4.5,
      objectives: 'עיצוב פוסטרים, חוברות, וחומרי שיווק ',
      software: 'Adobe Photoshop, Adobe Illustrator'
    },
    {
      session: 13,
      topic: 'עיצוב למדיה דיגיטלית',
      duration: 4.5,
      objectives: 'עיצוב גרפי ואנימציה למדיה דיגיטלית',
      software: 'Adobe After Effects, Adobe Illustrator, Figma'
    },
    {
      session: 14,
      topic: 'עיצוב תמונות בתוספי תוכנה',
      duration: 4.5,
      objectives: 'עיצוב תמונות והוספת אפקטים עם תוספי תוכנה',
      software: 'Adobe Photoshop, Adobe Lightroom'
    },
    {
      session: 15,
      topic: 'שילוב בין עיצוב וקוד',
      duration: 4.5,
      objectives: '  html / css הבנת השילוב בין עיצוב גרפי לקידוד ופיתוח',
      software: ''
    },
    {
      session: 16,
      topic: 'סטודיו עיצוב - תרגול ועבודה עצמית',
      duration: 4.5,
      objectives: 'תרגול עיצובי ועבודה עצמית תחת הנחיית המדריך',
      software: ''
    },
    {
      session: 17,
      topic: 'עיצוב ממשק משתמש מתקדם',
      duration: 4.5,
      objectives: 'עיצוב ממשק משתמש מתקדם עם שימוש בכלים מתקדמים',
      software: 'Adobe XD, Sketch, Figma'
    },
    {
      session: 18,
      topic: 'גרפיקה לתוספי תוכנה',
      duration: 4.5,
      objectives: 'עיצוב גרפי ואיור וגרפיקה לתוספי תוכנה',
      software: 'Adobe Illustrator, Adobe Photoshop, Figma'
    },
    {
      session: 19,
      topic: 'אנימציה ותנועה בעיצוב',
      duration: 4.5,
      objectives: 'יכולות התנועה והאנימציה בעיצוב גרפי',
      software: 'Adobe After Effects, Figma, Principle'
    },
    {
      session: 20,
      topic: 'עיצוב תערוכות ואירועים',
      duration: 4.5,
      objectives: 'עיצוב תערוכות, אירועים ותצוגות גרפיות',
      software: 'Adobe Photoshop, Adobe Illustrator, Sketch'
    },
    {
      session: 21,
      topic: 'עיצוב חבילות מוצרים',
      duration: 4.5,
      objectives: 'עיצוב גרפי ואריזות לחבילות מוצרים',
      software: 'Adobe Illustrator, Adobe Photoshop, Sketch'
    },
    {
      session: 22,
      topic: 'עיצוב אינטראקציה וחווית משתמש מתקדמת',
      duration: 4.5,
      objectives: 'עיצוב אינטראקציה וחווית משתמש מתקדמת',
      software: 'Adobe XD, Figma, Sketch'
    },
    {
      session: 23,
      topic: 'עיצוב וידאו וגרפיקת מותג',
      duration: 4.5,
      objectives: 'עיצוב וידאו, גרפיקת מותג ופרזנטציה גרפית',
      software: 'Adobe After Effects, Adobe Premiere Pro, Figma'
    },
    {
      session: 24,
      topic: 'שיפור עיצובים ופיתוח תכנותי',
      duration: 4.5,
      objectives: 'שיפור עיצובים ופיתוח תכנותי עבור עיצוב גרפי',
      software: ''
    },
    {
      session: 25,
      topic: 'עיצוב תקשורתי',
      duration: 4.5,
      objectives: 'עיצוב תקשורתי ופרסומות',
      software: 'Adobe Photoshop, Adobe Illustrator, Sketch'
    },
    {
      session: 26,
      topic: 'הכנת תיק עבודות',
      duration: 4.5,
      objectives: 'הכנת תיק עבודות ',
      software: ''
    },
    {
      session: 27,
      topic: 'סדנת חיפוש עבודה',
      duration: 4.5,
      objectives: ' קאוצינג ',
      software: ''
    }
  ];
  return (
    <div style={{textAlign:'center'}}>
            <h2>Graphic Design Course </h2>
      {course.map((val, index) => (
        <div key={index}>
          <h3 style={{color:'blue'}}>{val.session}</h3>
          <h3 style={{color:'blue'}}>{val.topic}</h3>
          <h4 style={{color:'green' }}>משך מפגש : {val.duration}</h4>
          <h5>{val.objectives}</h5>
          <h5>{val.software}</h5>

         
        </div>
      ))}


<h1 style={{color:'red'}}>  בשים לב שמדובר בסילבוס כללי ויש צורך בחוות דעת נוספת   </h1>


    </div>
  )
}
