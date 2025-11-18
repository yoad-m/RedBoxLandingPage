import {Package, MapPin, Truck, CheckCircle, Headphones} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    icon: Package,
    title: "הצעד הראשון",
    description: "יש לבחור מבין כל החברות האהובות עליך בחו״ל (כן אנחנו יודעים שהבחירה קשה)",
    color: "from-red-500 to-red-600",
    imageUrl: "https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGJveGVzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2MzM3NzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    dualImages: [
      "https://martinroll.com/wp-content/uploads/Uniqlo-The-Strategy-Behind-The-Global-Japanese-Fast-Fashion-Retail-Brand-Martin-Roll-1.jpg",
      "https://parade.com/.image/w_3840,q_auto:good,c_limit/MjEyNjQ3NTgzMjg0MjA5Mjgw/banana-republic.jpg",
        "https://img.businessoffashion.com/resizer/v2/GSWFOOJPRVFLFAK2JY7XZB6JOM.jpg?auth=5f063189f1f77fecd2756d8a96a466e48ac90b8b028fbc9d2a1ae6f8398f2a09&width=1440",
        "https://www.glossy.co/wp-content/uploads/sites/4/2022/08/cos-brand-store.jpeg?w=1140&h=600&crop=1",
    ],
  },
  {
    icon: MapPin,
    title: "איך נוודא שהחבילה תגיע למרכזים הלוגיסטים שלנו?",
    description: "בעת מילוי ההזמנה באתרים האהובים עליכם יש להכניס את הכתובת המיוחדת שהונפקה עבורכם אשר נמצאת ב״כתובות שלי״ אצלנו באתר ולהכניס אותה בדיוק אותו הדבר, לדוגמה חיה מאתר כמו אמזון - ",
    color: "from-red-500 to-red-600",
    imageUrl: "https://images.unsplash.com/photo-1754299356969-2b7d4ffefd9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhdGlvbiUyMG1hcCUyMHBpbnxlbnwxfHx8fDE3NjMzNzcwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Truck,
    title: "הגעת המשלוח למרכז הלוגיסטי",
    description: "הרגע המרגש הגיע והחבילה כעת הגיעה למרכז הלוגיסטי, אנא שימו לב כי מרגע הגעת החבילה עד לקליטתה לוקח עד כשלושה ימי עסקים, אין סיבה להיות מתוסכלים אם לא רואים אותה ישר ;) עברו שלושה ימים והיא לא הופיעה? אנא פנו לשירות הלקוחות שלנו והם יעזרו בכל דרך אשר יוכלו",
    color: "from-red-500 to-red-600",
    imageUrl: "https://www.dhl.com/content/experience-fragments/dhl/he/exp/help_and_related_tea/4_column/exp_master_hrt_dhl_express_discover_ecommerce/_jcr_content/root/container/teaser_copy_67646132.coreimg.80.1197.jpeg/1702454854151/employees-packing-shipment-0001.jpeg",
  },
  {
    icon: CheckCircle,
    title: "איך מתנהלים כאשר החבילה נמצאת במרכז הלוגיסיטי?",
    description: "יאיי החבילה נקלטה! במידה ויש שינויים שברצונך לעשות בחבילה, כגון איחוד עם חבילות אחרות, צמצום הנפח של החבילה, הוספת אריזת מגן וכדו׳ את הכל ניתן לעשות דרך האוזר האישי, ולאחר מכן ניתן לעלות חשבונית דרך כפתור התשלום ולעבור לתשלום מאובטח :)",
    color: "from-red-500 to-red-600",
    imageUrl: "https://media.istockphoto.com/id/513586632/photo/young-man-having-an-idea.jpg?s=612x612&w=0&k=20&c=bFJ8qCyU_ZYLb2Bs5q9JX7JOw9dxDjRFo_DlPlCdBt8=",
  },
    {
        icon: CheckCircle,
        title: "אחרי כל השלבים האלו אני בטוח שברצונך לדעת את הליך השילוח מהרגע שהוא יוצא מהמרכז הלוגיסטי שלנו..",
        description: "לאחר התשלום על החבילה היא מתחילה בהליך השילוח שלה מחו״ל עד אליך! לאחר התשלום אנו מכינים את החבילה לשילוח במרכז הלוגיסטי שלנו ובאותו זמן דואגים לשייך לך את החבילה לטיסה שתצא לכיווננו, לאחר סיום ההכנה אנו משנעים את החבילה לחברת התעופה שמשם היא דואגת לשילוחה מארה״ב או הולנד עד לארץ! לאחר הגעת החבילה לארץ היא נדרשת לעבור מכס (אל דאגה אנחנו מתעסקים בזה) ולאחר שחרורה אנו דואגים לשלח אותה עם חברת הפצה עד לביתך או נקודת איסוף לבחירתך",
        color: "from-red-500 to-red-600",
        imageUrl: "https://media3.reshet.tv/image/upload/t_grid-item-large/v1729847968/uploads/2024/904308832.webp",
    },
    {
        icon: CheckCircle,
        title: "הרגע לו חיכית.",
        description: "הרגע בו החבילה הגיעה אליך וכעת כל שנותר הוא להשאיר לנו איזה ביקורת טובה ;)",
        color: "from-red-500 to-red-600",
        imageUrl: "https://www.magen-b.co.il/wp-content/uploads/2023/08/%D7%9E%D7%A9%D7%9C%D7%95%D7%97-%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA.jpg",
    },
    {
        icon: Headphones,
        title: "נתקלם בבעיות, חששות, או שסתם אתם רוצים לדבר?",
        description: "שירות הלקוחות שלנו תמיד זמין לכל דבר בימים ראשון עד חמישי משעות 09:00-16:00",
        color: "from-red-600 to-red-700",
        imageUrl: "https://www.340.co.il/img/151/2.jpg",
    },
];

// SVG Arrow Component with playful curved path
function PlayfulArrow({ index }: { index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative h-24 w-full flex items-center justify-center">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 200 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Playful curved path */}
        <path
          d={isEven 
            ? "M 100 10 Q 120 30, 100 50 Q 80 70, 100 90" 
            : "M 100 10 Q 80 30, 100 50 Q 120 70, 100 90"
          }
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="5,5"
          className="animate-dash"
        />
        
        {/* Arrow head */}
        <path
          d="M 100 90 L 95 80 M 100 90 L 105 80"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Decorative dots */}
        <circle cx={isEven ? "120" : "80"} cy="30" r="3" fill="#EF4444" opacity="0.6" />
        <circle cx={isEven ? "80" : "120"} cy="70" r="3" fill="#F97316" opacity="0.6" />
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            איך זה עובד?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-0">
            {steps.map((step, index) => (
              <div key={index}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                      {/* Image side */}
                      <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 z-10"></div>
                        {step.dualImages ? (
                          <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full">
                            {step.dualImages.map((img, imgIndex) => (
                              <ImageWithFallback 
                                key={imgIndex}
                                src={img}
                                alt={`${step.title} - ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ))}
                          </div>
                        ) : (
                          <ImageWithFallback 
                            src={step.imageUrl}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {/* Step number overlay */}
                        <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                          <span className="text-2xl text-red-600">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content side */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'text-right'}`}>
                          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <PlayfulArrow index={index} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}