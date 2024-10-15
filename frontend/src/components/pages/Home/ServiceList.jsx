import Itemcard from "./Itemcard";
const ServiceList = ({ items }) => {
  return (
    <>
      {/* replace filteredUsers with items*/}
      <h1> Service List</h1>
      {items.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {items.map(({ id, name, address, description }) => {
            return (
              <li key={id}>
                <Itemcard>
                  <h3>Name: {name}</h3>
                  {/* <h2>Address: {address}</h2>
                  <h4>Description:{description}</h4> */}
                </Itemcard>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ServiceList;
