import { wrapper } from "./components/wrapper";
import { userCard } from "./components/userCard";

export default function App() {
  const users = [
    {
      name: "Virat Kohli",
      role: "Batsman",
      country: "India",
    },
    {
      name: "MS Dhoni",
      role: "Wicket Keeper, Batsman",
      country: "India",
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <Wrapper title="User List">
        {users.map((user, index) => (
          <Usercard
            key={index}
            name={user.name}
            role={user.role}
            country={user.country}
          />
        ))}
      </Wrapper>
    </div>
  );
}