import Grid from '@mui/material/Grid';
import { AppRouter } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid>
        <Header />
        <AppRouter />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
