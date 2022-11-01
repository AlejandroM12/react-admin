import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Sidebar, Topbar } from "./scenes/global";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import { Team, Contact, Invoices, Form, Calendar } from "./scenes";
// import Form from "./scenes/dashboard";
// import Bar from "./scenes/dashboard";
// import Pie from "./scenes/dashboard";
// import Line from "./scenes/dashboard";
// import FAQ from "./scenes/dashboard";
// import Geography from "./scenes/dashboard";
// import Calendar from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* 
             
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
               */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
