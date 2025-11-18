import { Clock, Shield, DollarSign, Smartphone, Headphones, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Clock,
    title: "מהם זמני ההגעה?",
    description: "זמני המשלוח המשוער הינו כ14-28 ימי עסקים אך בדרך כלל מגיע לפני ;)",
  },
  {
    icon: Shield,
    title: "בטוח ומאובטח",
    description: "ניתן להוסיף ביטוח לחבילות עד 1000$ ובכל מקרה שהוא נדאג לטפל!",
  },
  {
    icon: DollarSign,
    title: "מחירים תחרותיים",
    description: "מחירים הוגנים ללא עלויות נסתרות ושקיפות ככל הניתן",
  },
  {
    icon: Smartphone,
    title: "לא תמיד המחשב זמין?",
    description: "ממשק פשוט ונוח לשימוש מכל מכשיר",
  },
  {
    icon: Headphones,
    title: "כל התמיכה שלא ידעת שאתה צריך",
    description: "שירות הלקוחות שלנו תמיד כאן בשבילך, אנו זמינים מראשון - חמישי משעות 09:00-16:00 ",
  },
  {
    icon: BarChart3,
    title: "ניהול החבילות באזור האישי",
    description: "ביצוע פעולות ומעקב אחרי המשלוחים בהישג ידך :)",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנחנו מציעים את השירות הטוב והמקצועי ביותר בתחום המשלוחים
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-red-500 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-right">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 mr-auto">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}