import  Sidebar  from '../Components/Sidebar.jsx';
import { Outlet } from "react-router-dom";


function AppLayout ()
{
    return (
        <>   {/*display elements horizontally(Flexbox)*/}
            <div style={styles.wrapper}>
                <Sidebar/>
                <main  style={styles.main} >
                    <Outlet/>
                </main>
            </div>
        </>
    );
 
}


const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",  
  },

  main: {
    flex: 1,           
    padding: "20px",
    overflow: "auto"
  }
};


export default AppLayout;