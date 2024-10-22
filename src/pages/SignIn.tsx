import LoginForm from "@/components/local/Login/LoginForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function SignIn() {
    const navigate = useNavigate()
  return (
    <div className="relative w-screen h-screen flex justify-center items-center py-20 px-32 bg-teriary">
        <div className="flex-1 w-full h-full rounded-tl-lg rounded-bl-lg">
            <img className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg" src="https://i.pinimg.com/736x/45/20/84/4520843969ecefe5d2ecad32ee257074.jpg" alt="" />
        </div>
        <div className="flex-1 w-full h-full border-t border-r border-b border-primary rounded-tr-lg rounded-br-lg ">
            <LoginForm />
        </div>
        <Button onClick={() => navigate('/')} variant='ghost' className="absolute top-6 left-6 text-primary"><ArrowLeft className="w-3 h-3"/>Trở về trang chủ</Button>
    </div>
  )
}
