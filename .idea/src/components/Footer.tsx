import { Package, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-right">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-end">
              <span className="text-xl text-white">משלוחים חכמים</span>
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-sm">
              פתרון המשלוחים המתקדם והאמין ביותר בישראל
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">אודות</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">שירותים</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">מחירון</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">צור קשר</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">תמיכה</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">מרכז עזרה</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">תנאי שימוש</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">מדיניות פרטיות</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">שאלות נפוצות</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">צור קשר</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-end">
                <span>info@delivery.co.il</span>
                <Mail className="w-4 h-4 text-red-500" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>03-1234567</span>
                <Phone className="w-4 h-4 text-red-500" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>תל אביב, ישראל</span>
                <MapPin className="w-4 h-4 text-red-500" />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2025 משלוחים חכמים. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}