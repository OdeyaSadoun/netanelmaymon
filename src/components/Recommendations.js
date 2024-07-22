import React from 'react'

const Recommendations = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>

            <div className='container'>
                <h3 className='text-danger text-center my-4'>
                    לקוחות ממליצים
                </h3>
                <div className='boxes row justify-content-evenly'>
                    <div className='box col-3 border border-dark'>
                        <div className='fw-bold'>לקוח: דני כהן, תל אביב</div>
                        אני רוצה להמליץ בחום על חברת XYZ בניה. במהלך הבנייה של ביתי החדש, צוות החברה היה מקצועי, אדיב ועמד בכל היעדים שהצבנו יחד. הקפדה על הפרטים הקטנים וההשקעה האינסופית בביצוע מושלם ראויים לכל שבח. תודה מיוחדת למנהל הפרויקט, יוסי, שידע תמיד להקשיב ולתת פתרונות יצירתיים. אין ספק שאפנה אליהם שוב בפרויקטים עתידיים.                </div>
                    <div className='box col-3 border border-dark'>
                        <div className='fw-bold'>לקוחה: רינה לוי, חיפה</div>
                        שמחתי מאוד לעבוד עם משה מחברת ABC חשמל. משה הגיע בזמן, עבד ביעילות ובמקצועיות, ותיקן בעיה מורכבת בלוח החשמל של ביתי. הוא הסביר לי בפירוט את הבעיה והפתרונות האפשריים, ואני הרגשתי בטוחה להפקיד את העבודה בידיו. השירות היה מהיר ואיכותי, ואני ממליצה עליו בלב שלם לכל מי שזקוק לחשמלאי אמין ומקצועי.
                    </div>
                    <div className='box col-3 border border-dark'>
                        <div className='fw-bold'>לקוח: איתן מזרחי, ירושלים</div>
                        ברצוני להמליץ על חברת CoolAir למיזוג אוויר. לאחר חיפושים רבים, החלטתי לפנות אליהם לצורך התקנת מערכת מיזוג אוויר מרכזית בבית. הצוות היה אדיב ומקצועי, וביצע את העבודה במהירות ובדייקנות. המערכת שהתקינו פועלת ללא רבב ומספקת לנו חוויית קירור מצוינת גם בימים החמים ביותר. תודה רבה לניר ולכל הצוות על העבודה הנהדרת.
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Recommendations