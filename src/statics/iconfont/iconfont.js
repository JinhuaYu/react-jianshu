import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1534918821824'); /* IE9*/
    src: url('./iconfont.eot?t=1534918821824#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVYAAsAAAAAB+AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8rEkHY21hcAAAAYAAAABfAAABnLVwILVnbHlmAAAB4AAAAXYAAAGkJ52WXmhlYWQAAANYAAAALgAAADYSZYdEaGhlYQAAA4gAAAAcAAAAJAfeA4VobXR4AAADpAAAAA4AAAAQEAAAAGxvY2EAAAO0AAAACgAAAAoBHgCIbWF4cAAAA8AAAAAeAAAAIAESADxuYW1lAAAD4AAAAUUAAAJtPlT+fXBvc3QAAAUoAAAALwAAAECEFpVYeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByemT0XZW7438AQw9zA0AAUZgTJAQDjNgwveJztkEEOgCAMBKeAhhiv/MKj4UGefDiBZ2ApHnyE20zTbpoeFlgArxxKALkRhi51xXzPZn4g6x61HNRcS0u9fyeT2EW0r258kJVfu/Xz3fxIbWJzmYxcW5ogD59DFeoAeJw1jj9Lw1AUxe/NM4nVNk9s0qqk1TT/2iUNSZMnBaMpCoK7OLQKgh1UXHRyEcHJrV/ExQ9gHJzcnNz8Iib1VfEOB849B84PCPAj9wRBhQZ0AND1sCXJqCBFliDDBHsOdzKLGdaZ7LI4WMcmaio5sajtWLSIKoFYCelTDd8Vupzn8w8L+oqEo9HVYJiWG4uWVBJeLIVSpYhqTzSsiEEF36nltvMvyScHg9Ksmw7TRV5dmqczJAFg+k3uOJ4GBoDtJhh56HKOJtaDmNVrQYKcjXHLnx6S28ywyfPj4zPh2h872cKqKuQpmVxeTsiv9jNn3P/LudpGVlKbOPlPufLdOb47JRnflYGCBV0Aw3QN2cSwShzXlGQixmHQQDMyJbPlRL1t7JktmUNoai0M4i0UsvF+8bl3hvR090KUBFE+x08/ud5EI/XY+fFOv3vSbmys2f7HB4Gig9tLjlktXkX95q0b+51DpXxgH4n6qqYHdhPgB7N4U30AAHicY2BkYGAA4tcidcvi+W2+MnCzMIDA9cWKSxH0/z8sDMwglRwMTCBRADF/CmEAAHicY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm14nGNhYGBgQcIAALAAEQAAAAAAAABMAIgA0gAAeJxjYGRgYGBhMABiEGACYi4gZGD4D+YzAAANwgFPAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBJTUls4QrLTEvPSUxKzMvnckxkYEBAFDvBoQA') format('woff'),
    url('./iconfont.ttf?t=1534918821824') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1534918821824#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-edit:before { content: "\e715"; }

  .icon-fangdajing:before { content: "\e6e4"; }

  .icon-Aa:before { content: "\e636"; }
`
