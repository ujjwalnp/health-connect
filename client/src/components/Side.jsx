import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function Side() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Collapse icon={HiUser} label="Manage Account">
            <Sidebar.Item href="#">Create Account</Sidebar.Item>
            <Sidebar.Item href="#">View profile</Sidebar.Item>
          </Sidebar.Collapse>


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Side;
