var chart_config = {
  chart: {
    container: "#collapsable-example",
    animateOnInit: true,
    node: {
      collapsable: true
    },
    levelSeparation: 40,
    siblingSeparation: 20,
    connectors: {
      type: 'step',
      style: {
        'stroke': 'grey',
//        'arrow-end': {string},
//        'cursor': {string},
//        'fill': {string},
////'fill-opacity': {0.5},
//        'opacity': {number},
//        'stroke': {string},
//        'stroke-dasharray': {string},
//        'stroke-linecap': {string},
//        'stroke-opacity': {number},
        'stroke-width': 4,
      }
    },
    animation: {
      nodeAnimation: "linear ",
      nodeSpeed: 500,
      connectorsAnimation: "linear",
      connectorsSpeed: 100
    }
  },
  nodeStructure: {
    image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
    text: {
      name: {
        val: "Nataliya Siromakha",
        href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
        target: "_blank"
      },
      desc: {
        val: "Director,Engineering",
        href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
        target: "_blank"
      },
      title: {
        val: "MTC WFA TestSOP",
        href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
        target: "_blank"
      },
      nodeAlign: 'BOTTOM',
    },
    children: [
      {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
        text: {
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          desc: {
            val: "Director,Engineering",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          title: {
            val: "MTC WFA TestSOP",
            href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        childrenDropLevel: 2,
        children: [
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            children: [{}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            children: [{}, {}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            children: [{}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            children: [{}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            children: [{}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            children: [{}, {}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Iuldcdscsia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
          },
        ]
      },
      {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
        text: {
          name: {
            val: "Viktor Matusov",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          desc: {
            val: "Director,Engineering",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          title: {
            val: "MTC WFA TestSOP",
            href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true,
        children: [
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Alexander Lanin",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [
              {}
            ]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Vitalii Litvin",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            }
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Vitalii Tilinskii",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            }
          },
        ]
      },
      {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
        text: {
          name: {
            val: "Igor Rudko",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          desc: {
            val: "Director,Engineering",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          title: {
            val: "MTC WFA TestSOP",
            href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
        ]
      },
      {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
        text: {
          name: {
            val: "Yevgenii Kolometskiy",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          desc: {
            val: "Director,Engineering",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          title: {
            val: "MTC WFA TestSOP",
            href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [{
              children: [{}]
            }]
          },
        ]
      },
      {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
        text: {
          name: {
            val: "Dmytro Levitskiy (US)",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          desc: {
            val: "Director,Engineering",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          title: {
            val: "MTC WFA TestSOP",
            href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true,
          },
        ]
      },
      {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
        text: {
          name: {
            val: "Denys Bratchuk",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          desc: {
            val: "Director,Engineering",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
          title: {
            val: "MTC WFA TestSOP",
            href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [{}]
          },
          {
            image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM1ODA0NjMsImlhdCI6MTU0MzQ5NDA2MywiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJfc0RNUDA0c3RGQ3lweERpd2dIVkx3IiwibmJmIjoxNTQzNDk0MDYzfQ.GnB_Ew_A1jIlkZhY3F_d1XObgk4TCvr1LyAertnLveUCIUbDDCa8Q2UPeFpw3_3pG2fHJG085GY6sUkYGJxMOuik2C-CVLyNSMDxQKzKDJ7qtqn4P8kbyxlU6CVYvEQgHLUeBUkD6STCrw8pLtFnJxEnLZE6UsOwwNzgYOjQC53qI10HWUeFkFK23xsFMm8VtfJclKha7UN3S3S5RwT3biqVKDGHpLHwlTiJ-lHnnv3wpK9mhoabv0lW8b8W6vJCVtPN1mmYTXcJ_VIl30ebKd-VMuyi_sOOmkNt9X1aaDs5O54JZGqg3_11eKdxH59goQmbG83pH5n7tMiRWafHiA?size=320",
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              desc: {
                val: "Director,Engineering",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
              title: {
                val: "MTC WFA TestSOP",
                href: 'https://portal.globallogic.com/project/profile/b67da0cd2ed9/general',
                target: "_blank"
              }
            },
            stackChildren: true,
            children: [{}]
          },
        ]
      },
    ]
  }
};

/* Array approach
    var config = {
        container: "#collapsable-example",
        animateOnInit: true,

        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },
    lana = {
        parent: malory,
        image: "img/lana.png"
    }
    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }
    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },
    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },
    pseudo = {
        parent: malory,
        pseudo: true
    },
    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },
    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },
    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];
*/

tree = new Treant(chart_config);