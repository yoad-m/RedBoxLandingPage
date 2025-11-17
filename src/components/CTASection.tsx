import { Button } from "./ui/button";
import { ArrowLeft, Star } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            מוכנים להתחיל?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            הצטרפו לאלפי לקוחות מרוצים וחוו את חווית המשלוחים המתקדמת ביותר
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              צור חשבון בחינם
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              דבר איתנו
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-75">
            ללא התחייבות • ביטול בכל עת • תמיכה 24/7
          </p>
        </div>
      </div>
    </section>
  );
}