import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Form, Nav, Button, Navbar, NavDropdown,} from 'react-bootstrap'
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [fetchdata, setFetchData] = useState([]);
  const[area, setArea]=useState('indian');
  

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();

   
      setFetchData(data.meals);
    };

    fetchData();
  }, [area]);


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary, nav-con">
      <Container fluid className="">
        <Navbar.Brand href="#">Food Factory</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" navbar>Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            
            <Nav.Link href="#">
              Services
            </Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search your dish.."
              className="me-2, input-box"
              aria-label="Search"

            />
            <Button variant="outline-success" className="btnn">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    {/* navbar end */}
<div  className="btn-con">
    <div className="serch-btn">
    <Button variant="outline-primary" onClick={()=>setArea('Indian')}>Indian</Button>
      <Button variant="outline-secondary" onClick={()=>setArea('canadian')}>canadian</Button>
      <Button variant="outline-success" onClick={()=>setArea('American')}>American</Button>
      <Button variant="outline-warning" onClick={()=>setArea('British')}>British</Button>
      <Button variant="outline-danger" onClick={()=>setArea('Thai')}>Thai</Button>
      <Button variant="outline-info" onClick={()=>setArea('italian')}>Italian</Button>
     

    </div>
    </div>
    <div className="item-main-outer-box">
      <div className="item-main-con">
        {fetchdata.map((data) => (
          <div key={data.idMeal} >

            <div style={{width:"200px"}}>
                <img src={data.strMealThumb} width="200px" className="img"/>
                </div>
                <h5 className="title">{data.strMeal }</h5>

          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
