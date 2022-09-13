import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Breadcrumb, Layout } from "antd";
import CustomerHeader from "../Component/CustomerHeader";
const { Content, Footer } = Layout;

const CustomerLayout = (props) => {
  return (
    <Route exact path={props.path} render={(propsRoute) => {
        return (
          <Fragment>
            <Layout className="layout">
              <CustomerHeader />
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                  <props.component {...propsRoute} />
                </div>
              </Content>
              <Footer style={{ textAlign: "center"}}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

export default CustomerLayout;
