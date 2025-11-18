import { Button } from "./ui/button";
import { ArrowLeft, Package } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-bl from-red-50 via-white to-orange-50">
            <div className="container mx-auto px-4 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-right space-y-6">
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full">
                            <Package className="w-4 h-4" />
                            <span>פתרון חכם למשלוחים</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl">
                            גם אתם תהיתם מה ההליך?
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                אני כאן כדי להראות לכם!
              </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-xl">
                            איך בעצם אנו מביאים את החבילות שלך החברות האהובות שלא ניתנות לשילוח לארץ?
                            בוא תגלה :)
                        </p>

                        <div className="flex gap-4 justify-end">
                            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                                התחל עכשיו
                                <ArrowLeft className="w-5 h-5 mr-2" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                                צפה בהדגמה
                            </Button>
                        </div>

                        <div className="flex gap-8 justify-end pt-8">
                            <div className="text-center">
                                <div className="text-3xl text-red-600">1M+</div>
                                <div className="text-gray-600">משלוחים</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-red-600">50K+</div>
                                <div className="text-gray-600">לקוחות מרוצים</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur-3xl opacity-20"></div>
                        <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1758523670564-d1d6a734dc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBhY2thZ2UlMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzM3NjgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Delivery service"
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}