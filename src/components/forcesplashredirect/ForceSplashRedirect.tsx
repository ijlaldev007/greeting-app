import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForceSplashRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    const isReload = navEntry?.type === "reload";

    if (isReload && location.pathname !== "/splash") {
      navigate("/splash", { replace: true });
    }
  }, [navigate, location]);

  return null;
};

export default ForceSplashRedirect;
