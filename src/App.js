import React, { Suspense } from "react";
import MainLayout from "./layout";
import routes from "src/configs/navigation";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              element={
                <Suspense fallback={<></>}>
                  <div>
                    <route.component />
                  </div>
                </Suspense>
              }
            ></Route>
          ))}
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
