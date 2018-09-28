import React from 'react';
import { Toast } from 'antd-mobile'

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (

  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    {/* <Spin size="large" /> */}
    {
      Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
      })
    }
  </div>
);
