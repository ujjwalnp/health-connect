import React from 'react';
import { Sidebar } from 'flowbite-react';

function Admin() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Collapse  label="Doctor Account">
            <Sidebar.Item href="#">Create Account</Sidebar.Item>
            <Sidebar.Item href="#">View profile</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse  label="Lab Account">
            <Sidebar.Item href="#">Create Account</Sidebar.Item>
            <Sidebar.Item href="#">View profile</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse  label="Farma Account">
            <Sidebar.Item href="#">Create Account</Sidebar.Item>
            <Sidebar.Item href="#">View profile</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse  label="Patient Account">
            <Sidebar.Item href="#">Create Account</Sidebar.Item>
            <Sidebar.Item href="#">View profile</Sidebar.Item>
          </Sidebar.Collapse>


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Admin;
