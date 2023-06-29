import React from 'react'
import photoshop from '../photoshop.png'
import Illustrator from '../illustrator.png'
import indisign from '../indisign.png'
import figma from '../figma.png'
import animate from '../animat.png'

export default function Software() {



  const softwares = [
    {
      name: "Photoshop",
      description: "תוכנה לעריכת תמונות ועיצוב גרפי, עם אפשרויות עבודה על שכבות, תוספי פיקסלים ועריכת תמונות ברמה מקצועית",
      cost:'https://www.adobe.com/il_he/creativecloud/plans.html?plan=edu'
    },
    {
      name: "Illustrator",
      description: "תוכנה לעיצוב גרפי ועריכת תמונות וויקטוריות, המתמחה ביצירת איורים, לוגואים וגרפיקות מורכבות ברמה מקצועית",
      cost:'https://www.adobe.com/il_he/creativecloud/plans.html?plan=edu'
    },
    {
      name: "InDesign",
      description: "תוכנה לעיצוב פרינטי וספרותי, המיועדת לעיצוב קטלוגים, עיתונים, פרסומות וחוברות ברמה מקצועית",
      cost:'https://www.adobe.com/il_he/creativecloud/plans.html?plan=edu'
    },
    {
      name: "Animate",
      description: "תוכנה ליצירת אנימציות וגרפיקה מתוך תמונות סטטיות, כולל שליטה מלאה על תנועה, זמנים ומערכת הזמן",
  
    },
    {
      name: "Figma",
      description: "כלי עיצוב ובניית פרוטוטייפים בענן, המאפשר יצירת ממשקי משתמש מתקדמים, שיתוף עבודה בזמן אמת ושיתוף פרוטוטייפים עם אחרים",
      cost:'https://www.figma.com/pricing/'
    }
  ];
  return (
    <div style={{marginBottom:'100px'}} >
      <img className='adobe' src={photoshop} alt="photoshop" />
      <img className='adobe' src={Illustrator} alt="illustrator" />
      <img className='adobe' src={indisign} alt="indisign" />
      <img className='adobe' src={animate} alt="animate" />
      <img className='adobe' src={figma} alt="photoshop" />
      {softwares.map((val,index)=>{
  return<div style={{textAlign:'center'}}>
  <h1 style={{fontSize:'80px'}}>{val.name}</h1>
  <h3 style={{fontSize:'40px'}}>{val.description}</h3>
  <button style={{padding:'50px',backgroundColor:'Highlight',color:'whitesmoke',borderRadius:'50%'}}><a style={{fontSize:'50px',color:'whitesmoke',textDecoration:'none'}} href={val.cost}>cost</a></button>
     </div>

      })}
    </div>
  )
}
