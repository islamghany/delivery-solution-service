import Navigations from "@/navigations";
import { BrowserRouter as Router } from "react-router-dom";
import { Alert } from "@/components/Alert";
import { OverlaySpinner } from "@/components/Spinner";
import { useAuth } from "@/hooks/auth";

function App() {
  const { data, isLoading, error, isError } = useAuth();

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <OverlaySpinner show={true} />
      </div>
    );
  }

  return (
    <Router>
      <Navigations user={data} />
    </Router>
  );
}

export default App;
