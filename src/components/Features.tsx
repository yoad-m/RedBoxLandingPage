import { Clock, Shield, DollarSign, Smartphone, Headphones, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Clock,
    title: "מהיר ויעיל",
    description: "משלוחים מהירים תוך 24-48 שעות לכל הארץ",
  },
  {
    icon: Shield,
    title: "בטוח ומאובטח",
    description: "ביטוח מלא לכל משלוח ומעקב בזמן אמת",
  },
  {
    icon: DollarSign,
    title: "מחירים תחרוטיים",
    description: "מחירים הוגנים ללא עלויות נסתרות",
  },
  {
    icon: Smartphone,
    title: "אפליקציה ידידותית",
    description: "ממשק פשוט ונוח לשימוש מכל מכשיר",
  },
  {
    icon: Headphones,
    title: "תמיכה 24/7",
    description: "שירות לקוחות זמין תמיד לעזרתך",
  },
  {
    icon: BarChart3,
    title: "דוחות ותובנות",
    description: "מעקב אחר כל המשלוחים ודוחות מפורטים",
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