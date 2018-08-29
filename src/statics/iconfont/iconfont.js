import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1535473800947'); /* IE9*/
    src: url('./iconfont.eot?t=1535473800947#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAW8AAsAAAAACHQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8rEpDY21hcAAAAYAAAABrAAABstftn8lnbHlmAAAB7AAAAccAAAIUAK1IJmhlYWQAAAO0AAAALwAAADYSdncNaGhlYQAAA+QAAAAcAAAAJAfeA4ZobXR4AAAEAAAAAA4AAAAUFAAAAGxvY2EAAAQQAAAADAAAAAwA+AGObWF4cAAABBwAAAAfAAAAIAETADxuYW1lAAAEPAAAAUUAAAJtPlT+fXBvc3QAAAWEAAAANgAAAEdqHsn8eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByemb0IZG7438AQw9zA0AAUZgTJAQDnvgxseJztkcENgCAMRV8BjTFe3cKzZ1dgD0/OTJAtsFAPDuFvHml/Sg8tMABe2ZQAciE0nepK9z1z9wOH1jMTDpf3nO61xFrhm78S7bNoU73+0Fky8mvp7/FWoW3P6Hky2kXu1dDdUaKBPArAGx8AeJw1UD1v01AUvdcP+zVt4xdRf1CUBBx/NYtj2bGNIuHaVZGQuiNUWiohkaFULHRiwQiGqlv+Aj+gS9WRYgambp268Udil+eUviedq3Pulc7RAQHgtiD8QwcMAKR9VGWkEdWjFJOxM1pQRdMTDxtFFea7nk8uTorishK35wvM7iTh5653nJ9ckKwoMrG6fPPj2/+Z3S+AAH/kK0FQoAdD7uh6OJAoysgw4QaY4tjhjCZxgnpC3SQOniBPpZADi9mOxeqoHYjtkJ1peCWzh1W19H25+0jC/f2PW3v5am/FklrCL0tmTK4j7YyFbTFo4xWz3I3qr+STna1Wc5vv5Sv8tLPEmkhND3PyhcdTmx5sN8XIQ1duCtGDONG1IEWeLeGUix6Sz6Vhk/PT03PCcTJ1yuV1RahyMjs6mpEFTkpnOrnbc7SNsqX0cXa/5ch9H3DfW1JyXwoMLBgBGKZrUBPDNeK4pkSJGIdBD83IlMyBE403cWwOKA+hKloYxM9RKKcv65sX75G92/4gSoJID/HGTz89QyP3ksO32WR0sNF7+tj2r68J1EPc7DjmWv1b7B7/GcX+8JW8umO/Frvrajew+wD/AB6Pc8kAeJxjYGRgYABiBcHT0vH8Nl8ZuFkYQOD66pkdCPp/AwsDcwOQy8HABBIFABNsCh4AeJxjYGRgYG7438AQw8IAAkCSkQEVsAIARwsCbnicY2FgYGBBwwABBAAVAAAAAAAAADgAhADAAQp4nGNgZGBgYGUwYGBhAAEmIOYCQgaG/2A+AwAN3QFQAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgaW4IDOPJTUls4QrLTEvPSUxKzMvnckxkYEBAHvVCEoAAA==') format('woff'),
    url('./iconfont.ttf?t=1535473800947') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1535473800947#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-spin:before { content: "\e851"; }

  .icon-edit:before { content: "\e715"; }

  .icon-fangdajing:before { content: "\e6e4"; }

  .icon-Aa:before { content: "\e636"; }
`
