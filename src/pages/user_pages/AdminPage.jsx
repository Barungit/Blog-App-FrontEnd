import React from "react";
import Base from "../../Components/Base";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import classnames from "classnames";
import { checkAdmin } from "../../auth";
import ManageCategories from "./ManageCategories";
import ManageUsers from "./ManageUsers";
import ApproveBlogs from "./ApproveBlogs";

function AdminPage() {
  useEffect(() => {
    if (checkAdmin()) {
      console.log("You are admin!");
    } else {
      console.log("You are not admin!");
    }
  }, []);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      {checkAdmin() && (
        <Base>
          <h1>Hello! ADMIN!</h1>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Categories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Users
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Blogs To Approve
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <ManageCategories />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <ManageUsers />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <ApproveBlogs />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </Base>
      )}
    </>
  );
}

export default AdminPage;
