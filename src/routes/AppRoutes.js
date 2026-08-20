import { Navigate, Route, Routes } from "react-router-dom";
import { AddPost, Explore, Follow, Home, Login, Notification } from "../pages";
import { MainLayout } from "../layouts/MainLayout";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AuthRedirect = ({ children }) => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    return isAuth ? <Navigate to="/" /> : children;
};

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <AuthRedirect>
                        <Login />
                    </AuthRedirect>
                }
            />

            <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/follow" element={<Follow />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
