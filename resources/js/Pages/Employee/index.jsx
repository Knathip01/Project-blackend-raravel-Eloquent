import { router } from '@inertiajs/react';
import { useState } from 'react';

// quary = ค่าของการค้นหาที่ส่งมากลับจาก controller
// employees = ค่าของข้อมูลที่ส่งมาจาก controller
export default function Index({ employees, quary }) {
  const [search, setSearch] = useState(quary || '');
  const handleSearch = (e) => {
    e.preventDefault();
    // search คือค่าที่เราพิมพ์ในช่อง input
    router.get('/employee', { search });
  };

  return (
    <div>
      <h1>Employee List</h1>
      <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>


      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>LastName</th>
            <th>วันเกิด</th>
          </tr>
        </thead>
        <tbody>
          {employees.data.map((employee) => (
            <tr key={employee.emp_no}>
              <td>{employee.emp_no}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.birth_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={() =>
            employees.prev_page_url &&
            window.location.assign(employees.prev_page_url)
          }
          disabled={!employees.prev_page_url}
        >
          Previous
        </button>
        <button
        className="rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-700"
          onClick={() =>
            employees.next_page_url &&
            window.location.assign(employees.next_page_url)
          }
          disabled={!employees.next_page_url}
        >
          Next
        </button>
      </div>
    </div>
  );
}