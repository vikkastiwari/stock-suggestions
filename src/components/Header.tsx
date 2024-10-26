"use client"
import { fetchStockNews } from '@/utils/newsApi';
import { analyzeSentiment } from '@/utils/sentimentAnalysis';
import { fetchStockData } from '@/utils/stockApi';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    setCurrentDate(formattedDate);
    fetchStockNews("Apple")
    analyzeSentiment([
      {
          "source": {
              "id": null,
              "name": "Deseret News"
          },
          "author": "Deseret News",
          "title": "Where are things with Pac-12 expansion?",
          "description": "Things have been pretty quiet since it was announced that Gonzaga is joining the league.",
          "url": "https://www.deseret.com/sports/2024/10/24/conference-realignment-next-thing-for-pac-12/",
          "urlToImage": "https://media.zenfs.com/en/deseret_news_992/d268c5d6e5452eed847f19e5aab60e76",
          "publishedAt": "2024-10-24T22:43:13Z",
          "content": "Washington State defensive back Tyson Durant (5) celebrates with defensive back Jackson Lataimua (2), edge Quinn Roff (20) after his interception against Boise State in the first half of an NCAA coll… [+4447 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Minatokobe.com"
          },
          "author": "酔いどれ",
          "title": "AirPods Pro 2、最新ファームウェアで聴覚サポート機能がついに利用可能に！",
          "description": "画期的な補聴機能の実装で広がるAirPodsの可能性 Appleが、AirPods Pro 2向けに新しいファームウェアアップデートをリリースしました。 このアップデートで最も注目すべき点は、待望の「ヒアリングヘルス機能（Hearing Health features）」の追加です。従来のイヤホンとしての機能に加えて、補聴器としての機能も備えることになり、AirPods Pro 2の活用の幅が大きく広がることになります。 新機能の詳細と特徴 今回のアップデートで追加される機能は、主に以下の3つです： ヒアリングテ…",
          "url": "https://minatokobe.com/wp/apple/post-100377.html",
          "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2024/10/AirPods-Pro-2-firmware_01.png",
          "publishedAt": "2024-10-24T22:41:30Z",
          "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 15 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "9to5Mac"
          },
          "author": "Filipe Espósito",
          "title": "Download the iPad mini 6 and 7 wallpapers right here",
          "description": "Apple recently announced a new generation of the iPad mini, which features the faster A17 Pro chip inside with support for Apple Intelligence. There are exclusive wallpapers available for these iPads, but you can download them for any device here.\n\n\n\n more…",
          "url": "https://9to5mac.com/2024/10/24/download-ipad-mini-wallpapers/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/10/mini-2024-a17pro-colors.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-10-24T22:40:00Z",
          "content": "Apple recently announced a new generation of the iPad mini, which features the faster A17 Pro chip inside with support for Apple Intelligence. There are exclusive wallpapers available for these iPads… [+861 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Olhardigital.com.br"
          },
          "author": "Leandro Costa Criscuolo",
          "title": "Crianças poderão denunciar conteúdo inadequado no iMessage",
          "description": "Nova funcionalidade permitirá que jovens usuários reportem imagens e vídeos com nudez; Apple tomará medidas e informará autoridades\nO post Crianças poderão denunciar conteúdo inadequado no iMessage apareceu primeiro em Olhar Digital.",
          "url": "https://olhardigital.com.br/2024/10/24/seguranca/criancas-poderao-denunciar-conteudo-inadequado-no-imessage/",
          "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2024/10/Imessage.jpg",
          "publishedAt": "2024-10-24T22:36:05Z",
          "content": "A Apple está lançando um novo recurso no iMessage para permitir que crianças denunciem diretamente imagens e vídeos de nudez. Assim, a empresa poderá reportar os casos à polícia. A novidade está em t… [+1478 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Expansion.com"
          },
          "author": "expansion.com",
          "title": "Oprah Winfrey, la reina de la televisión",
          "description": "Al frente de un imperio mediático, fue la primera mujer negra en alcanzar el estatus de milmillonaria, gracias a su buen criterio para monetizar su marca personal e invertir en negocios vinculados a un estilo de vida saludable. Leer",
          "url": "https://www.expansion.com/podcasts/genios-finanzas/2024/10/25/671a5409e5fdeae0568b45e6.html",
          "urlToImage": "https://phantom-expansion.unidadeditorial.es/3f4aebd8526a8c33d8b133fea9a2bf4c/f/webp/assets/multimedia/imagenes/2024/10/24/17297790919975.jpg",
          "publishedAt": "2024-10-24T22:35:32Z",
          "content": "Al frente de un imperio mediático, fue la primera mujer negra en alcanzar el estatus de milmillonaria, gracias a su buen criterio para monetizar su marca personal e invertir en negocios vinculados a … [+817 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Mactrast.com"
          },
          "author": "Chris Hauk",
          "title": "Apple Makes New AirPods Pro 2 Firmware Available Ahead of iOS 18.1 Hearing Aid Feature Launch",
          "description": "Apple has released a new firmware update for the AirPods Pro 2, for both the USB-C and Lightning models.Read More...",
          "url": "https://www.mactrast.com/2024/10/apple-makes-new-airpods-pro-2-firmware-available-ahead-of-ios-18-1-hearing-aid-feature-launch/",
          "urlToImage": "https://www.mactrast.com/wp-content/uploads/2024/02/AirPods-Pro-2.jpg",
          "publishedAt": "2024-10-24T22:33:39Z",
          "content": "Apple has released a new firmware update for the AirPods Pro 2, for both the USB-C and Lightning models. The new AirPods Pro 2 firmware carries a build number of 7B19, up from the 7A305 firmware Appl… [+2931 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Yanko Design"
          },
          "author": "Vincent Nguyen",
          "title": "Apple’s Blazing Fast Performing M4 Macs Are Coming on October 28!",
          "description": "Apple’s Blazing Fast Performing M4 Macs Are Coming on October 28!Apple is shaking things up next week with a series of announcements centered around its Mac lineup. Forget the grand on-stage unveilings this time—Apple is...",
          "url": "https://www.yankodesign.com/2024/10/24/apples-blazing-fast-performing-m4-macs-are-coming-on-october-28/",
          "urlToImage": "https://www.yankodesign.com/images/design_news/2024/10/apples-blazing-fast-performing-m4-macs-are-coming-on-october-28/mac-hero.jpg",
          "publishedAt": "2024-10-24T22:30:15Z",
          "content": "Apple is shaking things up next week with a series of announcements centered around its Mac lineup. Forget the grand on-stage unveilings this timeApple is keeping it low-key, relying on press release… [+6364 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Twit.tv"
          },
          "author": "TWiT",
          "title": "TNW 359: FIDO Alliance Explains Passkeys Portability - AI Chatbots, Passkeys, Apple Intelligence",
          "description": "Would you use an AI chatbot in your disagreements with your significant other? A discussion on mental health and the complexities with AI technology and social interactions. The FIDO Alliance published new specs to help promote credential portability. And App…",
          "url": "https://twit.tv/shows/tech-news-weekly/episodes/359",
          "urlToImage": "https://elroy.twit.tv/sites/default/files/images/episodes/2024/10/853839/hero/TNW0359_thumbnail.jpg",
          "publishedAt": "2024-10-24T22:30:00Z",
          "content": "Would you use an AI chatbot in your disagreements with your significant other? A discussion on mental health and the complexities with AI technology and social interactions. The FIDO Alliance publish… [+1436 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Motor Authority"
          },
          "author": "news@motorauthority.com (Joel Feder), Joel Feder",
          "title": "Scout Traveler vs. Rivian R1S: How the off-road electric SUVs stack up",
          "description": "The first real challenger to the Rivian R1S’s electric SUV halo is coming, and it hails from South Carolina via Germany. The Scout brand has been resurrected by Volkswagen. On Thursday, the electric Scout Traveler SUV was unveiled as a direct rival for the Ri…",
          "url": "https://www.motorauthority.com/news/1144832_scout-traveler-vs-rivian-r1s-suv-specs",
          "urlToImage": "https://images.hgmsites.net/hug/scout-traveler-vs-rivian-r1s_100946527_h.jpg",
          "publishedAt": "2024-10-24T22:30:00Z",
          "content": "The first real challenger to the Rivian R1Ss electric SUV halo is coming, and it hails from South Carolina via Germany. The Scout brand has been resurrected by Volkswagen.\r\nOn Thursday, theelectric S… [+5393 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "New Zealand Herald"
          },
          "author": "Chris Keall",
          "title": "Warning for travellers: Older phones won’t work in Australia soon with 3G shutdown",
          "description": "The same goes for connected gadgets such as the Amazon Kindle.",
          "url": "https://www.nzherald.co.nz/business/warning-for-travellers-older-phones-wont-work-in-australia-soon-with-3g-shutdown/X2EGGN64UFE5FIKKGKIQJEYLLI/",
          "urlToImage": "https://www.nzherald.co.nz/resizer/v2/5MM25CGCGZFK5NZ5NX45QGL6I4.jpg?auth=03da33934c544bb3882d09f02638c49bbf36d5989321bb6ec59c78ecd3d57dff&width=1200&height=675&quality=70&smart=true",
          "publishedAt": "2024-10-24T22:29:36Z",
          "content": "The phones and gadgets affected\r\nIf your smartphone is a decade older or more, you might need to buy a new one.\r\nApple released its first 4G handset, the iPhone 5, in 2012, while Samsung released its… [+1334 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ithome.com"
          },
          "author": null,
          "title": "M4 Mac 来袭：苹果高管预告下周将发多款新品",
          "description": "IT之家 10 月 25 日消息，苹果公司全球营销高级副总裁 Greg Joswiak 今天（10 月 25 日）在 X 平台发布预告，将于下周一开始发布 M4 Mac 相关产品。IT之家翻译 Joswiak 推文内容如下：“Mac（和 Mark“标记”谐音）你的日程！从下周一早上开始，我们即将迎来一个激动人心的公告周，敬请关注……”。科技媒体 MacRumors 认为，根据 Joswiak 的推文口吻，苹果公司不会举办线下 10 月专场发布会，而是会邀请部分媒体线下参与，然后主要通过线上方式发布。古尔曼称，这些…",
          "url": "https://www.ithome.com/0/805/006.htm",
          "urlToImage": null,
          "publishedAt": "2024-10-24T22:29:31Z",
          "content": "IT 10 25 Greg Joswiak 10 25 X M4 Mac \r\nIT Joswiak Mac Mark\r\nMacRumors Joswiak 10 \r\n Mac MacBook ProiMac Mac mini Mac mini Apple TV USB-C \r\n<ul><li>14 MacBook Pro M4 \r\n</li><li>14 16 MacBook Pro M4 Pr… [+90 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Taisy0.com"
          },
          "author": "taisy0",
          "title": "Apple、｢AirPods Pro 2｣向けに最新のファームウェアアップデート｢7B19｣をリリース",
          "description": "MacRumorsによると、本日、Appleが、「AirPods Pro 2」向けに最新のファームウェアアップデートをリリースしたことが分かりました。 アップデートはUSB-CモデルとLightningモデルの両方にリリースされており、この",
          "url": "https://taisy0.com/2024/10/25/205350.html",
          "urlToImage": "https://taisy0.com/wp-content/uploads/2022/09/th_Airpodspro2nd.jpg",
          "publishedAt": "2024-10-24T22:29:20Z",
          "content": "MacRumorsAppleAirPods Pro 2\r\nUSB-CLightning7A3057B19\r\niOS 18.1AirPods Pro 27B19\r\nAirPodsAirPodsiOSBluetoothAirPods\r\nAirPodsWi-Fi iPhoneiPad Mac Bluetooth"
      },
      {
          "source": {
              "id": null,
              "name": "Expansion.com"
          },
          "author": "R. Poza Martín",
          "title": "Apple, Microsoft y Nvidia: ¿quién será el rey de la Bolsa?",
          "description": "Apple y Nvidia libran en las últimas sesiones una batalla particular por ser la cotizada con mayor capitalización bursátil del mundo, pero Microsoft, que ocupa el tercer puesto,...",
          "url": "https://www.expansion.com/mercados/2024/10/25/671abaf5468aeb6a2a8b458a.html",
          "urlToImage": "https://phantom-expansion.unidadeditorial.es/e7ea6e476e4d898457ae8a9c8504b8db/crop/13x26/1992x1345/resize/1200/f/webp/assets/multimedia/imagenes/2023/11/21/17005315030348.jpg",
          "publishedAt": "2024-10-24T22:27:58Z",
          "content": "Las tres rivalizan por ser la cotizada con mayor valor de mercado pese a que las valoraciones de las firmas de inversión arrojan prácticamente un empate técnico.Apple y Nvidia libran en las últimas s… [+409 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Applelinkage.com"
          },
          "author": "Al",
          "title": "「macOS Sequoia 15.1」のリリース候補2公開",
          "description": "Apple Inc.が、「macOS Sequoia 15.1 RC 2」（ビルド24B83）をApple Developer Programメンバーに配布しています。 macOS Sequoia 15.1では、パーソナ … 続きを読む 「macOS Sequoia 15.1」のリリース候補2公開 →",
          "url": "https://www.applelinkage.com/2024/10/25/macos-15-1-rc-2/",
          "urlToImage": null,
          "publishedAt": "2024-10-24T22:26:17Z",
          "content": "Apple Inc.macOS Sequoia 15.1 RC 224B83Apple Developer Program\r\nmacOS Sequoia 15.1Apple IntelligenceSiri"
      },
      {
          "source": {
              "id": "la-nacion",
              "name": "La Nacion"
          },
          "author": "Iván Mazorco",
          "title": "Qué se siente manejar la nueva Volkswagen Amarok",
          "description": "Su actualización estética está acompañada de una mecánica probada, con el motor más potente del segmento; en detalle, cómo es la experiencia al volante de la nueva pick up",
          "url": "https://www.lanacion.com.ar/autos/que-se-siente-manejar-la-nueva-volkswagen-amarok-nid24102024/",
          "urlToImage": "https://resizer.glanacion.com/resizer/v2/una-de-las-principales-transformaciones-visuales-ZODQUVP7RREAFCVGM43BGZ2DHE.jpg?auth=81c77cfb241b158453425f1f2008c8dd2b1c7d84d06e4ca732f5432205fcbc53&width=1200&quality=70&smart=false&height=675",
          "publishedAt": "2024-10-24T22:25:23Z",
          "content": "Es la gran apuesta de Volkswagen para este año y si bien su lanzamiento generó debate por los cambios que introdujo (menores de lo esperado para algunos), la realidad es que la nueva Amarok sabe mant… [+4759 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Mormonlifehacker.com"
          },
          "author": "dyejo",
          "title": "Church News podcast episode 211 // BYU’s Justin Dyer on mental health // The positive impact of temple attendance",
          "description": ".",
          "url": "https://mormonlifehacker.com/church-news-podcast-episode-211-byus-justin-dyer-on-mental-health-the-positive-impact-of-temple-attendance/",
          "urlToImage": "https://i0.wp.com/mormonlifehacker.com/wp-content/uploads/2024/10/Screen-Shot-2024-10-24-at-4.23.28-PM.png?fit=1200%2C809&ssl=1",
          "publishedAt": "2024-10-24T22:24:08Z",
          "content": "The Church News podcast features a discussion on the connection between temple attendance and mental health among Latter-day Saint youth, with insights from Professor Justin Dyer of Brigham Young Uni… [+3641 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Patently Apple"
          },
          "author": "Jack Purcher",
          "title": "After the Launch of Qualcomm's Snapdragon 8 Elite, Apple is set to introduce their M4 processor in a series of refreshed Macs next week+",
          "description": "On Monday Patently Apple posted a report titled \" Snapdragon 8 Elite: 10 ways Qualcomm’s Oryon CPU and other features will revolutionize your next Android smartphone.\" Next week Apple will counter with their new M4 processors in a refreshed Mac Lineup and more",
          "url": "https://www.patentlyapple.com/2024/10/after-the-launch-of-qualcomms-snapdragon-8-elite-apple-is-set-to-introduce-their-m4-processor-in-a-s.html",
          "urlToImage": "https://patentlyapple.typepad.com/.a/6a0120a5580826970c02e860ef1d45200d-600wi",
          "publishedAt": "2024-10-24T22:21:17Z",
          "content": "On Monday Patently Apple posted a report titled \" Snapdragon 8 Elite: 10 ways Qualcomms Oryon CPU and other features will revolutionize your next Android smartphone.\" CNET reported that \" The 8 Elite… [+2909 chars]"
      },
      {
          "source": {
              "id": "the-verge",
              "name": "The Verge"
          },
          "author": "Jay Peters",
          "title": "Apple Intelligence bug bounty invites researchers to test its privacy claims",
          "description": "Apple is now letting anyone investigate its Private Cloud Compute (PCC) system that’s used to power more computationally intensive Apple Intelligence requests.",
          "url": "https://www.theverge.com/2024/10/24/24278881/apple-intelligence-bug-bounty-security-researchers-private-cloud-compute",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/ClkCB_h7ezkPo-bmQ9twzhBOHc4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25697390/STK071_APPLE_H.jpg",
          "publishedAt": "2024-10-24T22:20:24Z",
          "content": "Apple Intelligence bug bounty invites researchers to test its privacy claims\r\nApple Intelligence bug bounty invites researchers to test its privacy claims\r\n / Researchers can run a security analysis … [+2427 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Deadline"
          },
          "author": "Dessi Gomez",
          "title": "‘The Chicken Sisters’ Hallmark+ Series Creator Talks Season Finale And ‘Planting Seeds’ For a Second Season",
          "description": "SPOILER ALERT: This post contains spoilers for The Chicken Sisters finale. Adapted from KJ Dell’Antonia’s book, The Chicken Sisters, which was a Reese’s Book Club pick in December 2020, Hallmark’s eight-part series of the same name aired its finale on Hallmar…",
          "url": "http://deadline.com/2024/10/the-chicken-sisters-creator-interview-1236157866/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2024/10/TheChickenSisters_108_0777_RT.jpg?w=1024",
          "publishedAt": "2024-10-24T22:19:14Z",
          "content": "SPOILER ALERT: This post contains spoilers for The Chicken Sisters finale.\r\nAdapted from KJ Dell’Antonia’s book, The Chicken Sisters, which was a Reese’s Book Club pick in December 2020, Hallmark’s e… [+8273 chars]"
      },
      {
          "source": {
              "id": "la-nacion",
              "name": "La Nacion"
          },
          "author": null,
          "title": "Lionel Messi: un nuevo premio, la MLS y lo que dijo el Tata Martino del Balón de Oro, sin la presencia del crack",
          "description": "Lionel Messi es uno de los cinco finalistas al premio MVP de la temporada 2024 de la liga norteamericana",
          "url": "https://www.lanacion.com.ar/deportes/futbol/lionel-messi-un-nuevo-premio-la-mls-y-lo-que-dijo-el-tata-martino-del-balon-de-oro-sin-la-presencia-nid24102024/",
          "urlToImage": "https://resizer.glanacion.com/resizer/v2/lionel-messi-dias-atras-con-gianni-infantino-el-BXCC5G3DSNEPBIGPP25ULGVJLA.jpg?auth=009db180aa1374f8042fe007338a2ec7b0cdf8fe71435e50f314ffe41f93ec44&width=1200&quality=70&smart=false&height=800",
          "publishedAt": "2024-10-24T22:18:27Z",
          "content": "El astro Lionel Messi es uno de los cinco finalistas al premio MVP (jugador más valioso) de la temporada 2024 de la liga norteamericana, anunció la MLS este jueves. Messi, de 37 años, disputó 19 part… [+5229 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Motley Fool Australia"
          },
          "author": "Tristan Harrison",
          "title": "2 low-cost Vanguard ASX ETFs for set-and-forget Aussie investors",
          "description": "These funds could provide everything investors are looking for. \nThe post 2 low-cost Vanguard ASX ETFs for set-and-forget Aussie investors appeared first on The Motley Fool Australia.",
          "url": "https://www.fool.com.au/2024/10/25/2-low-cost-vanguard-asx-etfs-for-set-and-forget-aussie-investors/",
          "urlToImage": "https://www.fool.com.au/wp-content/uploads/2023/09/GettyImages-1139707950-1-1200x675.jpg",
          "publishedAt": "2024-10-24T22:17:44Z",
          "content": "Vanguard is one of the leading providers of ASX-listed exchange-traded funds (ETFs). It offers a number of compelling investment products which typically come with low costs.\r\nAussies can get exposur… [+2801 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Libertaddigital.com"
          },
          "author": "Juan Manuel Rodríguez",
          "title": "El Primer Palo (24/10/2024): Programa completo; Sánchez Martínez pitará el Clásico",
          "description": "Tertulia con Paul Tenorio, Jose Miguélez y Dani Blanco",
          "url": "https://esradio.libertaddigital.com/fonoteca/2024-10-25/el-primer-palo-24-10-2024-programa-completo-sanchez-martinez-pitara-el-clasico-p70-s1701600-7178228.html",
          "urlToImage": "https://s.libertaddigital.com/2024/04/21/1200/627/589x191/esradio/2104-vini-previa-clasico.jpg",
          "publishedAt": "2024-10-24T22:15:20Z",
          "content": "Escucha este programa en cualquier momento y lugar a través de los podcasts de Libertad Digital y esRadio. Descarga nuestra aplicación para iOs o Android, visita nuestra página web en esradio.fm, o e… [+315 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Newmobilelife.com"
          },
          "author": "Andy",
          "title": "分析師預測 iPhone 17 Pro Max 將縮小動態島",
          "description": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1729807729482\"} -->\n擁有不錯 Apple 產品預測紀錄的分析師 Jeff Pu 指出，預計 2025 年推出的 iPhone 17 Pro Max 將會縮小動態島(Dynamic Island) 設計。這項消息印證他在 5 月時的說法。\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":483169,\"sizeSlug\":\"lar…",
          "url": "https://www.newmobilelife.com/2024/10/25/iphone-17-pro-max-may-use-smaller-dynamic-island/",
          "urlToImage": "https://static.newmobilelife.com/wp-content/uploads/2023/07/dynamic.jpg",
          "publishedAt": "2024-10-24T22:14:18Z",
          "content": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1729807729482\"} -->\n擁有不錯 Apple 產品預測紀錄的分析師 Jeff Pu 指出，預計 2025 年推出的 iPhone 17 Pro Max 將會縮小動態島(Dynamic Island) 設計。這項消息印證他在 5 月時的說法。\n<!-- /… [+1025 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "9to5Mac"
          },
          "author": "Filipe Espósito",
          "title": "Perplexity AI native app for macOS now available on the Mac App Store",
          "description": "After teasing a native app for macOS last month, Perplexity AI on Thursday officially launched a version of its app for the Mac. Users can now interact with the platform more easily without having to rely on the web version.\n\n\n\n more…",
          "url": "https://9to5mac.com/2024/10/24/perplexity-ai-app-macos-mac/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/Perplexity-Mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-10-24T22:12:07Z",
          "content": "After teasing a native app for macOS last month, Perplexity AI on Thursday officially launched a version of its app for the Mac. Users can now interact with the platform more easily without having to… [+1384 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Uol.com.br"
          },
          "author": "Vinicius Marques",
          "title": "iOS 18.2 terá integração com ChatGPT; saiba mais",
          "description": "Integração com chatbot é fruto de parceria com a OpenAI\nThe post iOS 18.2 terá integração com ChatGPT; saiba mais appeared first on Giz Brasil.",
          "url": "https://gizmodo.uol.com.br/ios-18-2-tera-integracao-com-chatgpt-saiba-mais/",
          "urlToImage": "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2024/09/Apple-September-2024-new-product-lineups-geo_big.jpg.large_-e1726834511874.jpg",
          "publishedAt": "2024-10-24T22:11:57Z",
          "content": "Às vésperas do lançamento do Apple Intelligence no iOS 18.1, a maçã já está se movimentando para liberar mais ferramentas alimentadas por IA (Inteligência Artificial). A big tech liberou oficialmente… [+1942 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Minatokobe.com"
          },
          "author": "酔いどれ",
          "title": "Appleは月曜日からMacに関する「発表週間」を予告",
          "description": "大規模な製品発表週間の幕開け Appleが2024年10月末に向けて、新しいMac製品の発表週間を予告しました。同社のワールドワイドマーケティング上級副社長であるGreg Joswiak氏は、「Mac your calendars（カレンダーにMacの予定を入れて）」と述べ、月曜日から始まる「エキサイティングな発表の週」を予告しています。 昨年のような「Scary Fast」イベントとは異なり、今回は毎日プレスリリースを通じて新製品を発表していく形式を取るようです。これは、より効率的な情報発信方法として注目されて…",
          "url": "https://minatokobe.com/wp/apple/post-100372.html",
          "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2024/10/Week-of-Mac_01.jpg",
          "publishedAt": "2024-10-24T22:10:35Z",
          "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 15 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Variety"
          },
          "author": "Clayton Davis",
          "title": "Oscar Predictions: Best Production Design — Will ‘Wicked’ Finally Bring Home a Win for Six-Time Nominee Nathan Crowley?",
          "description": "Variety Awards Circuit section is the home for all awards news and related content throughout the year, featuring the following: the official predictions for the upcoming Oscars, Emmys, Grammys and Tony Awards ceremonies, curated by Variety senior awards edit…",
          "url": "https://variety.com/lists/2025-oscars-best-production-design-predictions/",
          "urlToImage": "https://variety.com/wp-content/uploads/2024/10/2551_D067_00334R.jpg?w=1000&h=563&crop=1",
          "publishedAt": "2024-10-24T22:10:00Z",
          "content": "Variety Awards Circuit section is the home for all awards news and related content throughout the year, featuring the following: the official predictions for the upcoming Oscars, Emmys, Grammys and T… [+5721 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Phandroid - News for Android"
          },
          "author": "Mike Viray",
          "title": "The iPad Mini 7 Finally Lands in Stores, but Should You Grab One?",
          "description": "Apple is banking on the device's performance to be its main selling point.\nThe post The iPad Mini 7 Finally Lands in Stores, but Should You Grab One? appeared first on Phandroid.",
          "url": "https://phandroid.com/2024/10/24/the-ipad-mini-7-finally-lands-in-stores-but-should-you-grab-one/",
          "urlToImage": "https://phandroid.com/wp-content/uploads/2024/10/ipad-mini-7.png",
          "publishedAt": "2024-10-24T22:06:26Z",
          "content": "Following the announcement of the new seventh-generation iPad Mini, Apple’s latest compact tablet is finally available in stores nationwide. While it does pack some upgrades over its predecessor from… [+1528 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "2024-10-24T22:04:58Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "Mactrast.com"
          },
          "author": "Chris Hauk",
          "title": "Apple Teases Exciting Week of (M4 Mac) Announcements for Next Week",
          "description": "Apple's Senior Vice President of Marketing, Greg Joswiak today teased Apple's plans for an \"exciting week of announcements\" next week. Read More...",
          "url": "https://www.mactrast.com/2024/10/apple-teases-exciting-week-of-m4-mac-announcements-for-next-week/",
          "urlToImage": "https://www.mactrast.com/wp-content/uploads/2024/10/M4-Mac-Tease.jpg",
          "publishedAt": "2024-10-24T22:04:30Z",
          "content": "Apple’s Senior Vice President of Marketing, Greg Joswiak today teased Apple’s plans for an “exciting week of announcements” next week.  As Joswiak said to “Mac your calendars,” indicating a eek of M4… [+1679 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Android Headlines"
          },
          "author": "Alap Naik Desai",
          "title": "Apple allows iPhone users to uninstall the iOS App Store",
          "description": "Apple is allowing iPhone users to uninstall the iOS App Store. The company is making it easier to delete some core iOS apps as well.",
          "url": "https://www.androidheadlines.com/2024/10/apple-allows-iphone-users-to-uninstall-the-ios-app-store.html",
          "urlToImage": "https://www.androidheadlines.com/wp-content/uploads/2024/04/apples-app-store-opens-the-door-to-game-jpg.webp",
          "publishedAt": "2024-10-24T22:03:15Z",
          "content": "Apple is allowing iPhone users to uninstall the iOS App Store. The company is making it easier to delete some core or built-in iOS apps as well.\r\nApple allows EU iPhone users to uninstall the iOS App… [+2097 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Forbes"
          },
          "author": "Stephanie Gravalese, Contributor, \n Stephanie Gravalese, Contributor\n https://www.forbes.com/sites/stephaniegravalese/",
          "title": "Taco Bell’s ‘Decades Menu’: Which Generation Will You Be Reliving?",
          "description": "Taco Bell’s Decades Menu brings back fan-favorites like the ‘60s Tostada and ‘00s Caramel Apple Empanada. Discover these nostalgic classics, available for a limited time.",
          "url": "https://www.forbes.com/sites/stephaniegravalese/2024/10/24/taco-bells-decades-menu-which-generation-will-you-be-reliving/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671abca917a0ff0cbdd4ca8b/0x0.png?format=png&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-10-24T22:02:44Z",
          "content": "Taco Bell Brings Back Nostalgic Menu Items From the '60s to 2000sHeres What to Order on the New ... [+] Decades Menu Taco Bell brings back nostalgic menus\r\nCOURTESY OF TACO BELL\r\nTaco Bell is giving … [+5129 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Letemsvetemapplem.eu"
          },
          "author": "Jiří Filip",
          "title": "Takt chce Apple zajistit, aby bylo půjčování Vision Pro vašim blízkým ještě přívětivější",
          "description": "Půjčit Apple Vision Pro bylo až do vydání visionOS 2.0 kvůli absenci jakéhokoliv režimu hosta takřka nemožné, jelikož při každé změně majitele bylo třeba zaktivovat kalibrační režim pro oči a ruce a naopak nešlo zakázat, do jakých aplikací případného návštěvn…",
          "url": "https://www.letemsvetemapplem.eu/2024/10/25/takt-chce-apple-zajistit-aby-bylo-pujcovani-vision-pro-vasim-blizkym-jeste-privetivejsi/",
          "urlToImage": "https://www.letemsvetemapplem.eu/wp-content/uploads/2024/06/P02-WWDC-24-vision-OS-24.jpg",
          "publishedAt": "2024-10-24T22:01:04Z",
          "content": "Pjit Apple Vision Pro bylo a do vydání visionOS 2.0 kvli absenci jakéhokoliv reimu hosta takka nemoné, jeliko pi kadé zmn majitele bylo teba zaktivovat kalibraní reim pro oi a ruce a naopak nelo zaká… [+864 chars]"
      },
      {
          "source": {
              "id": "globo",
              "name": "Globo"
          },
          "author": null,
          "title": "Exchange Kraken planeja lançar sua própria blockchain no ano que vem",
          "description": "Corretoras internacionais miram sucesso da BNB, da Binance, e da BASE, da Coinbase",
          "url": "https://valor.globo.com/financas/criptomoedas/noticia/2024/10/24/exchange-kraken-planeja-lancar-sua-propria-blockchain-no-ano-que-vem.ghtml",
          "urlToImage": "https://s2-valor.glbimg.com/dc21KyLlsE_CtWk3_boCFuEiJvA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2024/M/j/kEDBbjSt6BpwD9Z7PBXA/kraken-exchange.jpg",
          "publishedAt": "2024-10-24T22:00:40Z",
          "content": "Uma das exchanges de criptomoedas mais antigas do mundo, a Kraken, planeja lançar uma blockchain no início do próximo ano para aplicações descentralizadas que permitem a negociação e o empréstimo de … [+3296 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Android Police"
          },
          "author": "Alex 'Toddy' Walker-Todd",
          "title": "Anker MagGo 10,000mAh Slim Power Bank review: A portable powerhouse",
          "description": "Want a huge power bank with the latest Qi2 charging, while still keeping things portable? Anker has the perfect solution.",
          "url": "https://www.androidpolice.com/anker-maggo-power-bank-10000mah-slim-review/",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/10/anker-maggo-power-bank-10k-slim-review-front-angled-handheld.jpg",
          "publishedAt": "2024-10-24T22:00:13Z",
          "content": "Anker is known for its charging-focused mobile accessories, from wireless charging stands to power adapters. Still, it's probably power banks where the company first really made a name for itself. In… [+8171 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Arigato-ipod.com"
          },
          "author": "アイアリ",
          "title": "Appleが来週10/28からの一週間、Mac関連の複数の発表を予定。役員のジョズが予告",
          "description": "Appleが現地時間10月28日（月）からの一週間、Mac関連の複数の発表を予定しています。 Jozの愛称で知られる、Appleのワールドワイドマーケティング担当シニアバイスプレジデントのグレッグ・ジョズウィアック氏が、Xで予告しています。",
          "url": "https://arigato-ipod.com/2024/10/apple-plans-to-launch-mac-from-october-28-2024.html",
          "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2024/10/241025findericon.webp",
          "publishedAt": "2024-10-24T22:00:11Z",
          "content": "Appleが現地時間10月28日（月）からの一週間、Mac関連の複数の発表を予定しています。\nJozの愛称で知られる、Appleのワールドワイドマーケティング担当シニアバイスプレジデントのグレッグ・ジョズウィアック氏が、Xで予告しています。\n\nMac () your calendars! We have an exciting week of announcements ahead, start… [+348 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Fantascienza.com"
          },
          "author": "Angela Bernardoni",
          "title": "Televisione: Scissione: ecco il primo trailer della seconda stagione",
          "description": "Il personaggio interpretato da Adam Scott si inoltra nei labirinti della Lumon per scoprire i segreti che nasconde\nLa lunga attesa (quasi tre anni) per la seconda stagione di Severance (in italiano Scissione), la serie distopico-lavorista di Apple TV+ creata …",
          "url": "https://www.fantascienza.com/30293/scissione-ecco-il-primo-trailer-della-seconda-stagione",
          "urlToImage": "https://www.fantascienza.com/imgbank/social-video/202410/46500-severance.jpg",
          "publishedAt": "2024-10-24T22:00:00Z",
          "content": "La lunga attesa (quasi tre anni) per la seconda stagione di Severance (in italiano Scissione), la serie distopico-lavorista di Apple TV+ creata da Dan Erickson, sta per finire e, per ingannarla, è ap… [+1466 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Idnes.cz"
          },
          "author": "https://www.facebook.com/iDNES.cz",
          "title": "Kam se na tyto hodinky s cenou hrabe Apple. Nabité vydrží měsíc",
          "description": "Na trh zamířila novinka od výrobce Garmin, model Fenix 8. Hodinky mají několik nových funkcí a tři velikostní varianty. Jde o prémiové modely s důrazem na skvělou výbavu a dlouhou výdrž baterie, čemuž odpovídá i vyšší cena.",
          "url": "https://www.idnes.cz/nastaveni-souhlasu?url=https%3a%2f%2fwww.idnes.cz%2fmobil%2fnositelna-elektronika%2fgarmin-fenix-chytre-hodinky.A241024_124154_wearables_oma%2ffoto",
          "urlToImage": "https://1gr.cz/o/ogimage/idnes-new.jpg",
          "publishedAt": "2024-10-24T22:00:00Z",
          "content": "Portál iDNES.cz je tady pro vás. Staí si vybrat, jakou formou vám máme zobrazovat obsah.iDNES.cz a reklama\r\nPokud vyuijete místo platby udlení souhlasu s reklamou (tj. souhlas s vyuitím cookies a dal… [+2835 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "9to5Toys"
          },
          "author": "Reinette LeJeune",
          "title": "Govee’s new Matter-ready Christmas Cone tree lights with built-in mic gets first discount to $130",
          "description": "Coming to us through its official Amazon storefront, we’ve just spotted the first chance to save on Govee’s new Christmas Cone Tree Lights for $129.99 shipped, after clipping the on-page $20 off coupon. Recently released and carrying a $150 price tag, this fi…",
          "url": "http://9to5toys.com/2024/10/24/govee-christmas-cone-tree-lights-first-discount/",
          "urlToImage": "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2024/10/Govee-Christmas-Cone-Tree-Lights.jpg?resize=1200%2C628&ssl=1",
          "publishedAt": "2024-10-24T21:58:47Z",
          "content": "Coming to us through its official Amazon storefront, weve just spotted the first chance to save on Govees new Christmas Cone Tree Lights for $129.99 shipped, after clipping the on-page $20 off coupon… [+3970 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "EFF"
          },
          "author": "Cory Doctorow",
          "title": "Disability Rights Are Technology Rights",
          "description": "At EFF, our work always begins from the same place: technological self-determination. That’s the right to decide which technology you use, and how you use it. Technological self-determination is important for every technology user, and it’s especially importa…",
          "url": "https://www.eff.org/deeplinks/2024/06/disability-rights-are-technology-rights",
          "urlToImage": "https://www.eff.org/files/banner_library/wheelchair-drm-2b.png",
          "publishedAt": "2024-10-24T21:57:03Z",
          "content": "At EFF, our work always begins from the same place: technological self-determination. Thats the right to decide which technology you use, and how you use it. Technological self-determination is impor… [+6255 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "pymnts.com"
          },
          "author": "PYMNTS",
          "title": "Klarna Launches UK Gift Card Store Through Its App",
          "description": "The U.K.’s gift card market is valued at £7 billion and expected to reach nearly £9 billion in 2025, according to the Gift Card & Voucher Association. Looking to get a piece of that market, Swedish FinTech company Klarna launched a Gift Card Store in the U.K.…",
          "url": "https://www.pymnts.com/buy-now-pay-later/2024/klarna-launches-uk-gift-card-store-through-its-app/",
          "urlToImage": "https://www.pymnts.com/wp-content/uploads/2024/10/Klarna-gift-cards.jpg",
          "publishedAt": "2024-10-24T21:56:40Z",
          "content": "The U.K.s gift card market is valued at £7 billion and expected to reach nearly £9 billion in 2025, according to the Gift Card &amp; Voucher Association.\r\nLooking to get a piece of that market, Swedi… [+2173 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Olhardigital.com.br"
          },
          "author": "Ana Luiza Figueiredo",
          "title": "Apple anuncia semana de lançamentos de Macs a partir de segunda-feira",
          "description": "Apple prepara uma semana de anúncios sobre novos Macs, com destaque para modelos equipados com chips M4, a partir de segunda-feira\nO post Apple anuncia semana de lançamentos de Macs a partir de segunda-feira apareceu primeiro em Olhar Digital.",
          "url": "https://olhardigital.com.br/2024/10/24/reviews/apple-anuncia-semana-de-lancamentos-de-macs-a-partir-de-segunda-feira/",
          "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2024/10/iStock-1422115729.jpg",
          "publishedAt": "2024-10-24T21:55:47Z",
          "content": "A Apple está criando expectativa para uma semana de anúncios de novos Macs, marcada para começar na manhã de segunda-feira (28). Embora não esteja previsto um evento formal de lançamento de produtos … [+1972 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "sixcolors.com"
          },
          "author": "Jason Snell",
          "title": "Use a cloned drive to recover from Mac failures",
          "description": "Last month, my Mac Studio stopped working. It went quickly from a bizarre error message to the inability to install software updates to a failure to reinstall the base operating system to a trip to the Genius Bar.…",
          "url": "https://sixcolors.com/post/2024/10/use-a-cloned-drive-to-recover-from-mac-failures/",
          "urlToImage": "https://149426355.v2.pressablecdn.com/wp-content/themes/sixcolors/images/6colors_og_image.png",
          "publishedAt": "2024-10-24T21:53:36Z",
          "content": "Last month, my Mac Studio stopped working. It went quickly from a bizarre error message to the inability to install software updates to a failure to reinstall the base operating system to a trip to t… [+3280 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Creative Bloq"
          },
          "author": "joe.foley@futurenet.com (Joe Foley)",
          "title": "When's the best time to buy a MacBook?",
          "description": "With M4 MacBooks expected soon, we might start to see some bargains.",
          "url": "https://www.creativebloq.com/tech/laptops/whens-the-best-time-to-buy-a-macbook",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/usjQuRLRYAnGNyogLuNgWQ-1200-80.jpg",
          "publishedAt": "2024-10-24T21:49:22Z",
          "content": "Thinking of upgrading your setup for creative work? Then you're probably wondering when's the best time to buy a MacBook. Apple's laptops remain some of the most popular choices among creatives, from… [+7668 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Criptonoticias.com"
          },
          "author": "Nicolás Antiporovich",
          "title": "Microsoft evalúa invertir en bitcoin",
          "description": "Será un tema de votación en la próxima reunión de accionistas.\nLeer más",
          "url": "https://www.criptonoticias.com/negocios/microsoft-evalua-invertir-bitcoin/",
          "urlToImage": "https://www.criptonoticias.com/wp-content/uploads/2024/10/microsoft-oficinas-adobe.jpeg",
          "publishedAt": "2024-10-24T21:47:10Z",
          "content": "<ul><li>El 10 de diciembre habrá novedades sobre esta decisión.\r\n</li><li>Bitcoin reacciona al alza, aunque la Junta de accionistas sugiere votar en contra de la propuesta.\r\n</li></ul>\r\nLa compañía e… [+1698 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Quartz India"
          },
          "author": "Britney Nguyen",
          "title": "TSMC reports early success at first U.S. chip plant",
          "description": "Taiwan Semiconductor Manufacturing Company’s (TSM) first U.S. chip fabrication facility is reportedly ahead of some of the ones back home.Read more...",
          "url": "https://qz.com/tsmc-us-chip-fab-ahead-comparable-taiwan-arizona-apple-1851680813",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c1960930b78d4e6238d42db59ecc0c38.jpg",
          "publishedAt": "2024-10-24T21:46:00Z",
          "content": "In This Story\r\nTaiwan Semiconductor Manufacturing Companys (TSM-1.46%\r\n) first U.S. chip fabrication facility is reportedly ahead of some of the ones back home.\r\nThe companys chip production yields o… [+2065 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "kicker"
          },
          "author": "kicker",
          "title": "Parade mit Tausenden Fans: Fiebich und Sabally feiern WNBA-Titel",
          "description": "Leonie Fiebich und Nyara Sabally haben gemeinsam mit ihren Teamkolleginnen von New York Liberty den ersten WNBA-Titel des Teams gefeiert. Nach dem Finalsieg gegen die Minnesota Lynx zogen sie bei einer Parade durch New York und genossen den Triumph zusammen m…",
          "url": "https://www.kicker.de/parade-mit-tausenden-fans-fiebich-und-sabally-feiern-wnba-titel-1062218/artikel",
          "urlToImage": "https://derivates.kicker.de/image/upload/c_crop%2Cx_0%2Cy_70%2Cw_4000%2Ch_2250/w_1200%2Cq_auto/v1/2024/10/24/93986ba3-f710-4efe-90f6-4aac353fa5d9.jpeg",
          "publishedAt": "2024-10-24T21:42:37Z",
          "content": "Leonie Fiebich und Nyara Sabally haben gemeinsam mit ihren Teamkolleginnen von New York Liberty den ersten WNBA-Titel des Teams gefeiert. Nach dem Finalsieg gegen die Minnesota Lynx zogen sie bei ein… [+1465 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Gadget2ch.com"
          },
          "author": "Gadget 2ch",
          "title": "【悲報】Appleご自慢のVision Proさん、思ったより売れない",
          "description": "高額だからなぁ 1: それでも動く名無し 2024/10/24(木) 17:38:24.21 ID:1fU28RJu0 信者も買わないのか     アップル、ＭＲ対応「ビジョンプロ」生産を大幅縮小   米アップル(AAP...",
          "url": "http://www.gadget2ch.com/archives/post-241138.html",
          "urlToImage": "https://i0.wp.com/www.gadget2ch.com/wp-content/uploads/2024/10/visionpro.jpg.webp?fit=300%2C300",
          "publishedAt": "2024-10-24T21:42:19Z",
          "content": "1: 2024/10/24() 17:38:24.21 ID:1fU28RJu0\r\n2: 2024/10/24() 17:39:16.15 ID:MXni9OuH0\r\n4: 2024/10/24() 17:40:31.85 ID:iDiSBWVK0\r\n3: 2024/10/24() 17:39:50.36 ID:qJJpkFay0\r\n7: 2024/10/24() 17:40:59.04 ID:… [+1315 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Osxdaily.com"
          },
          "author": "OSXDaily",
          "title": "Deals: M2 MacBook Air for $699.99 ($300 Off!)",
          "description": "Amazon is offering a rather large discount deal on the M2 MacBook Air base model, coming in at just $699.99 after you clip the on-page coupon. That’s $300 off the Apple retail price on the exact same model! It’s not clear how long this deal price will be avai…",
          "url": "https://osxdaily.com/2024/10/24/deals-m2-macbook-air-for-699-99-300-off/",
          "urlToImage": "https://cdn.osxdaily.com/wp-content/uploads/2024/10/macbook-air-m2.jpg",
          "publishedAt": "2024-10-24T21:41:02Z",
          "content": "Amazon is offering a rather large discount deal on the M2 MacBook Air base model, coming in at just $699.99 after you clip the on-page coupon. That’s $300 off the Apple retail price on the exact same… [+848 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "PCMag.com"
          },
          "author": "Michael Kan",
          "title": "Apple Offers $1 Million Bug Bounty to Anyone Who Can Hack Its AI Servers",
          "description": "The company invites security researchers to vet Private Cloud Compute, a server system that will process the most complex generative AI tasks for Apple Intelligence.\nApple is offering a reward of up to $1 million to anyone who can hack its new fleet of AI-foc…",
          "url": "https://me.pcmag.com/en/ai/26563/apple-offers-1-million-bug-bounty-to-anyone-who-can-hack-its-ai-servers",
          "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/a/apple-offe/apple-offers-1-million-bug-bounty-to-anyone-who-can-hack-its_82kb.1200.jpg",
          "publishedAt": "2024-10-24T21:40:58Z",
          "content": "Apple is offering a reward of up to $1 million to anyone who can hack its new fleet of AI-focused servers meant for Apple Intelligence, which is slated to launch next week. \r\nApple is asking research… [+2216 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "PCMag.com"
          },
          "author": "Michael Kan",
          "title": "Apple Offers $1 Million Bug Bounty to Anyone Who Can Hack Its AI Servers",
          "description": "The company invites security researchers to vet Private Cloud Compute, a server system that will process the most complex generative AI tasks for Apple Intelligence.\nApple is offering a reward of up to $1 million to anyone who can hack its new fleet of AI-foc…",
          "url": "https://uk.pcmag.com/ai/155039/apple-offers-1-million-bug-bounty-to-anyone-who-can-hack-its-ai-servers",
          "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/a/apple-offe/apple-offers-1-million-bug-bounty-to-anyone-who-can-hack-its_ddvz.1200.jpg",
          "publishedAt": "2024-10-24T21:40:58Z",
          "content": "Apple is offering a reward of up to $1 million to anyone who can hack its new fleet of AI-focused servers meant for Apple Intelligence, which is slated to launch next week. \r\nApple is asking research… [+2216 chars]"
      },
      {
          "source": {
              "id": "ign",
              "name": "IGN"
          },
          "author": "João Paes",
          "title": "Nem Ruptura, nem Stranger Things: esta série demorou tanto para voltar entre uma temporada e outra que muitos pensaram que estava cancelada",
          "description": "A série segurou a onda por bastante anos.\nRuptura do Apple TV+ acabou de ganhar um novo trailer para a sua segunda temporada, que chega em 17 de janeiro de 2025. Sendo assim, a série terá ficado quase três anos em hiato entre as temporadas. É bastante tempo, …",
          "url": "https://br.ign.com/curb-your-enthusiasm/131528/news/nem-ruptura-nem-stranger-things-esta-serie-demorou-tanto-para-voltar-entre-uma-temporada-e-outra-que",
          "urlToImage": "https://sm.ign.com/t/ign_br/screenshot/default/imagem-2024-10-24-145202196_tv93.1200.jpg",
          "publishedAt": "2024-10-24T21:40:25Z",
          "content": "Ruptura do Apple TV+ acabou de ganhar um novo trailer para a sua segunda temporada, que chega em 17 de janeiro de 2025. Sendo assim, a série terá ficado quase três anos em hiato entre as temporadas. … [+1717 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Mactrast.com"
          },
          "author": "Chris Hauk",
          "title": "Apple Seeds Second macOS Sequoia 15.1 Release Candidate to Developers and Public Beta Testers",
          "description": "Apple today seeded the second release candidate of macOS Sequoia 15.1 to developers and public beta testers to allow them to continue testing before the update is released to the public.Read More...",
          "url": "https://www.mactrast.com/2024/10/apple-seeds-second-macos-sequoia-15-1-release-candidate-to-developers-and-public-beta-testers/",
          "urlToImage": "https://www.mactrast.com/wp-content/uploads/2024/06/Apple-WWDC24-macOS-Sequoia-Safari.jpg",
          "publishedAt": "2024-10-24T21:36:02Z",
          "content": "Apple today seeded the second release candidate of macOS Sequoia 15.1 to developers and public beta testers to allow them to continue testing Apple Intelligence features before the update is released… [+1251 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "3dnews.ru"
          },
          "author": null,
          "title": "Apple объявила неделю новостей о Mac — грядёт множество компьютеров на чипах M4",
          "description": "В Сети давно циркулируют слухи о скором выходе разных Mac с процессорами M4. Apple подогревает интерес, обещая неделю новостей, касающихся линейки персональных компьютеров, начиная с понедельника. Возможно, будут представлены новые MacBook Pro, iMac и Mac Min…",
          "url": "https://3dnews.ru/1113000/apple-namekaet-na-nedelyu-novostey-o-novih-mac-s-chipami-m4",
          "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/10/24/1113000/Apple-iMac.jpg",
          "publishedAt": "2024-10-24T21:36:00Z",
          "content": "Mac M4. Apple , , , . , MacBook Pro, iMac Mac Mini.\r\n: Apple / X.com\r\n- Apple (Greg Joswiak) X/Twitter, Mac, M4. Apple, , , «» .\r\n The Verge, Mac . (Mark Gurman) Bloomberg Power On. , Apple Mac M4, i… [+156 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CinemaBlend"
          },
          "author": "Alexandra Ramos",
          "title": "32 Shows From My 2000s Childhood That Still Hold Up As An Adult",
          "description": "Alright, I think it's time for a marathon.",
          "url": "https://www.cinemablend.com/television/shows-from-my-2000s-childhood-that-still-hold-up-as-an-adult",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/yUC5xqjjqHMAc9L9Sem7Mf-1200-80.png",
          "publishedAt": "2024-10-24T21:33:00Z",
          "content": "If you know me, you know that I’ve always been the queen of rewatching old shows that I’ve just come to love more and more as I’ve gotten older. From cartoon classics to live-action comedies, there a… [+13374 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Nodejs.org"
          },
          "author": null,
          "title": "Node v23.1.0 (Current)",
          "description": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
          "url": "https://nodejs.org/en/blog/release/v23.1.0",
          "urlToImage": "https://nodejs.org/zh-tw/next-data/og?title=Node.js%20%E2%80%94%20Node%20v23.1.0%20(Current)&type=release",
          "publishedAt": "2024-10-24T21:32:29Z",
          "content": "Antoine du Hamel\r\nWhen a Buffer is created using a resizable ArrayBuffer, the Buffer length\r\nwill now correctly change as the underlying ArrayBuffer size is changed.\r\nconst ab = new ArrayBuffer(10, {… [+14983 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "tomandlorenzo.com"
          },
          "author": "Lorenzo Marquez",
          "title": "Megan Thee Stallion on THE TONIGHT SHOW STARRING JIMMY FALLON",
          "description": "Megan Thee Stallion stopped by The Tonight Show in just about the most perfect hottie frock you’re ever gonna see.   It’s too tight in the bust and we’ll always hate minis with trains, but who cares what these two homosexuals think? She looks insanely fine an…",
          "url": "https://tomandlorenzo.com/2024/10/megan-thee-stallion-on-the-tonight-show-starring-jimmy-fallon/",
          "urlToImage": "https://tomandlorenzo.com/wp-content/uploads/2024/10/Megan-Thee-Stallion-The-Tonight-Show-Starring-Jimmy-Fallon-TV-Style-NBC-Tom-Lorenzo-Site-1.jpg",
          "publishedAt": "2024-10-24T21:30:26Z",
          "content": "Archives: \r\nSelect\r\n October 2024 \r\n September 2024 \r\n August 2024 \r\n July 2024 \r\n June 2024 \r\n May 2024 \r\n April 2024 \r\n March 2024 \r\n February 2024 \r\n January 2024 \r\n December 2023 \r\n November 2023… [+3712 chars]"
      },
      {
          "source": {
              "id": "lenta",
              "name": "Lenta"
          },
          "author": "Андрей Ставицкий",
          "title": "В России впервые подешевел iPhone 16 Pro Max",
          "description": "В российской розничной продаже подешевел флагманский iPhone 16 Pro Max. На это обратило внимание издание Hi-Tech Mail.ru",
          "url": "https://lenta.ru/news/2024/10/25/16promax/",
          "urlToImage": "https://icdn.lenta.ru/images/2024/10/24/12/20241024124524691/share_b298f0ddd771c005a14180b4d35be84d.jpg",
          "publishedAt": "2024-10-24T21:30:24Z",
          "content": "iPhone 16 Pro Max. Hi-Tech Mail.ru.\r\n , Apple 150-160 . « 194 . », .\r\n , 20 30 . , Apple .\r\n16 Pro Max 6,9 OLED- 1 120 . A18 Pro, 8 256 . 48, 48 12 . 4685 -.\r\n, iPhone 16 Pro 116 . 170 ."
      },
      {
          "source": {
              "id": null,
              "name": "Macdailynews.com"
          },
          "author": "MacDailyNews",
          "title": "Apple responds after being fined with Goldman Sachs over Apple Card issues",
          "description": "Following an investigation, the Consumer Financial Protection Bureau (CFPB) today announced it has fined Apple and Goldman Sachs nearly…\nThe post Apple responds after being fined with Goldman Sachs over Apple Card issues appeared first on MacDailyNews.",
          "url": "https://macdailynews.com/2024/10/24/apple-responds-after-being-fined-with-goldman-sachs-over-apple-card-issues/",
          "urlToImage": "https://149359564.v2.pressablecdn.com/wp-content/uploads/2024/10/241024_goldman_sachs.png",
          "publishedAt": "2024-10-24T21:30:08Z",
          "content": "Following an investigation, the Consumer Financial Protection Bureau (CFPB) today announced it has fined Apple and Goldman Sachs nearly $90 million combined for “Apple Card failures” related to “cust… [+1746 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "IndieWire"
          },
          "author": "Marcus Jones",
          "title": "Cinema Eye Honors Rolls Out First Batch of 2025 Documentary Nominees and Contenders",
          "description": "Today's announcement includes the Audience Choice Prize Longlist, the Unforgettables Honorees, nominees in five Broadcast categories, and the annual Shorts List.",
          "url": "https://www.indiewire.com/awards/results/cinema-eye-honors-2025-long-list-nominees-documentaries-1235059875/",
          "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/09/MCDWIAN_ZX002.jpg?w=650",
          "publishedAt": "2024-10-24T21:30:00Z",
          "content": "Cinema Eye Honors today shared a string of announcements, including the 16 films on its Audience Choice Prize Longlist, the unveiling of this year’s Unforgettables Honorees, nominees in its five Broa… [+6585 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "2024-10-24T21:30:00Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "Deadline"
          },
          "author": "Patrick Hipes",
          "title": "Cinema Eye Honors: ‘Girls State’, ‘Ren Faire’ Lead Broadcast Nominees; Audience Choice Award Longlist Revealed",
          "description": "Apple TV+’s Girls State and HBO’s Ren Faire scored three nominations apiece to lead all broadcast nominees announced Thursday for the 18th Cinema Eye Honors. The group, which recognizes the year’s outstanding nonfiction and documentary films and TV series, al…",
          "url": "http://deadline.com/2024/10/cinema-eye-honors-2024-nominations-list-1236157695/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2024/10/Girls-State-Ren-Faire.jpg?w=1024",
          "publishedAt": "2024-10-24T21:30:00Z",
          "content": "Apple TV+’s Girls State and HBO’s Ren Faire scored three nominations apiece to lead all broadcast nominees announced Thursday for the 18th Cinema Eye Honors. The group, which recognizes the year’s ou… [+6401 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Forbes"
          },
          "author": "Kris Holt, Contributor, \n Kris Holt, Contributor\n https://www.forbes.com/sites/krisholt/",
          "title": "Today’s NYT ‘Connections’ Hints And Answers For October 25 (#502)",
          "description": "Looking for some help with Friday's NYT Connections? Some hints and the answers for today's game are right here.",
          "url": "https://www.forbes.com/sites/krisholt/2024/10/24/nyt-connections-today-help-hints-answers-friday-october-25-502/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64de654d82fd643c3ad8ae1f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-10-24T21:30:00Z",
          "content": "Find the links between the words to win today's game of Connections.\r\ngetty\r\nLooking for Thursdays Connections hints and answers instead? You can find them here:\r\nForbesTodays NYT Connections Hints A… [+6451 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Iphoneros.com"
          },
          "author": "iPhoneros",
          "title": "Descuentos de hasta el 27% en Apple Watch Series 9, el Series 10 ya se vende más barato",
          "description": "El Apple Watch Series 9, a pesar de ser unos pocos milímetros más grueso que el Watch Series 10, aún sigue siendo muy popular y por supuesto Apple sigue fabricándolo y vendiéndolo. Al ser un modelo relativamente reciente que sólo lleva un año a la venta tambi…",
          "url": "https://iphoneros.com/98816/descuentos-en-apple-watch-series-9-y-10-octubre-2024",
          "urlToImage": "https://iphoneros.com/wp-content/uploads/2024/10/oijqerfoijwerfijo.jpg",
          "publishedAt": "2024-10-24T21:28:18Z",
          "content": "El Apple Watch Series 9, a pesar de ser unos pocos milímetros más grueso que el Watch Series 10, aún sigue siendo muy popular y por supuesto Apple sigue fabricándolo y vendiéndolo. Al ser un modelo r… [+1279 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Eldiario.es"
          },
          "author": "Juan Luis Sánchez",
          "title": " PODCAST | Sonido y silencios en el incendio más grande del mundo",
          "description": "El pulmón del planeta arrasado por el fuego. Consecuencias devastadoras en lo ambiental, una respuesta ciudadana muy por encima de la política. Un fuego que tiene muchos orígenes y pocas respuestas\r\nOferta especial - Hazte socio de elDiario.es y llévate un añ…",
          "url": "https://www.eldiario.es/blog/al-dia/podcast-sonido-silencios-incendio-grande-mundo_132_11761107.html",
          "urlToImage": "https://static.eldiario.es/clip/47a3cf54-bf8f-4661-ba3a-93066cc593a4_facebook-aspect-ratio_default_0.jpg",
          "publishedAt": "2024-10-24T21:26:32Z",
          "content": "Se trata de uno de los incendios más grandes del mundo: 10 millones de hectáreas quemadas. El fuego se extiende por Bolivia, pero también llega a Brasil, Perú, Colombia. Es decir, se quema el Amazona… [+64 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Osxdaily.com"
          },
          "author": "Paul Horowitz",
          "title": "Perplexity AI Brings More Artificial Intelligence Tools to Mac",
          "description": "Mac users now have another Artificial Intelligence assistant option available to them natively, thanks to the new Perplexity app for Mac. Perplexity offers a free AI-powered answer engine that uses multiple models, including GPT-4o and Claude 3, and perhaps b…",
          "url": "https://osxdaily.com/2024/10/24/perplexity-ai-brings-more-artificial-intelligence-tools-to-mac/",
          "urlToImage": "https://cdn.osxdaily.com/wp-content/uploads/2024/10/perplexity-ai-for-mac.jpg",
          "publishedAt": "2024-10-24T21:25:37Z",
          "content": "Mac users now have another Artificial Intelligence assistant option available to them natively, thanks to the new Perplexity app for Mac. \r\nPerplexity offers a free AI-powered answer engine that uses… [+2690 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ferra.ru"
          },
          "author": "Николай Шелофастов",
          "title": "Россиянин нашёл лазейку для использования ИИ в iOS 18 на русском языке",
          "description": "Россиянам рассказали, как использовать нейросетевые функции iOS 18.2 на русском языке",
          "url": "https://www.ferra.ru/news/techlife/rossiyanin-nashyol-lazeiku-dlya-ispolzovaniya-ii-v-ios-18-na-russkom-yazyke-25-10-2024.htm",
          "urlToImage": "https://www.ferra.ru/imgs/2024/10/24/21/6635941/c0b68ea2ecf3d598cbcdd4250708013ebe927bdb.jpg",
          "publishedAt": "2024-10-24T21:24:20Z",
          "content": "Apple - iOS 18.2 , ChatGPT Siri . Siri , . .\r\n «» . , Apple Intelligence. Compose, ChatGPT. , - . , .\r\n , OpenAI, . ChatGPT IP-, , . , AppleApple Intelligence, ."
      },
      {
          "source": {
              "id": null,
              "name": "Forbes"
          },
          "author": "Marc Saltzman, Contributor, \n Marc Saltzman, Contributor\n https://www.forbes.com/sites/forbes-personal-shopper/people/marcsaltzman/",
          "title": "Dell Vs. HP: Which Computer Brand Should You Buy?",
          "description": "Deciding between Dell versus HP can be a tough decision. We help whittle down your options so you can choose what computer brand is best for you.",
          "url": "https://www.forbes.com/sites/forbes-personal-shopper/article/dell-vs-hp/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671aba5d886689730d697f40/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-10-24T21:22:50Z",
          "content": "When it comes to laptop and PC makers, it doesnt get much more iconic than Dell versus HP. Both American institutions have been selling a variety of laptops, desktops and accessories for several deca… [+10636 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "First Showing"
          },
          "author": "Alex Billington",
          "title": "Rousing 'Inside Look' Making Of Featurette for Steve McQueen's 'Blitz'",
          "description": "\"Everything about this film feels incredibly authentic. It's a true portrayal of London.\" Apple TV has just unveiled a behind-the-scenes featurette providing a quick look at Steve McQueen's latest - a WWII drama set in London called Blitz. Taking place during…",
          "url": "https://www.firstshowing.net/2024/new-inside-look-making-of-featurette-for-steve-mcqueens-blitz/",
          "urlToImage": "https://media2.firstshowing.net/firstshowing/img16/BlitzmovieMcqueenfeatbigimgTw1.jpg",
          "publishedAt": "2024-10-24T21:21:24Z",
          "content": "by Alex BillingtonOctober 24, 2024Source:YouTube\r\n\"Everything about this film feels incredibly authentic. It's a true portrayal of London.\" Apple TV has just unveiled a behind-the-scenes featurette p… [+2495 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Libertaddigital.com"
          },
          "author": "Dieter Brandau",
          "title": "El análisis de Juan Ramón Rallo: Las energéticas y la banca reaccionan al 'impuestazo'",
          "description": "Dieter comenta con Juan Ramón Rallo las reacciones de las compañías y el sector bancario a la intención de hacer permanente el tributo.",
          "url": "https://esradio.libertaddigital.com/fonoteca/2024-10-24/el-analisis-de-juan-ramon-rallo-las-energeticas-y-la-banca-reaccionan-al-impuestazo-p37-s7050275-7178143.html",
          "urlToImage": "https://s.libertaddigital.com/2023/09/19/1500/1500/rallo.jpg",
          "publishedAt": "2024-10-24T21:21:00Z",
          "content": "Escucha este programa en cualquier momento y lugar a través de los podcasts de Libertad Digital y esRadio. Descarga nuestra aplicación para iOs o Android, visita nuestra página web en esradio.fm, o e… [+315 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Cult of Mac"
          },
          "author": "Cult of Mac Deals",
          "title": "Price drop: Block ads and data trackers forever with this top-rated service",
          "description": "Snag a lifetime subscription to the AdGuard family plan. The iOS and Mac ad blocker also protects your privacy on Android and PC.\n(via Cult of Mac - Apple news, rumors, reviews and how-tos)",
          "url": "https://www.cultofmac.com/daily-deals/adguard-lifetime-deal",
          "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2023/07/COM-AdGuard-Family-Plan-Lifetime-Subscription.jpeg",
          "publishedAt": "2024-10-24T21:20:50Z",
          "content": "Hackers and malicious viruses are very much a concern when youre on the web, but the biggest threats to your productivity and your privacy come from everyday internet hazards. AdGuard an ad blocker f… [+2242 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "TheWrap"
          },
          "author": "Steve Pond",
          "title": "‘Girls State,’ ‘Ren Faire’ Lead Cinema Eye Honors Broadcast Nominations",
          "description": "The New York-based documentary organization also named 16 nominees for its Audience Choice Award\nThe post ‘Girls State,’ ‘Ren Faire’ Lead Cinema Eye Honors Broadcast Nominations appeared first on TheWrap.",
          "url": "https://www.thewrap.com/girls-state-ren-faire-cinema-eye-honors-broadcast-nominations/",
          "urlToImage": "https://www.thewrap.com/wp-content/uploads/2024/10/Girls-State.jpg",
          "publishedAt": "2024-10-24T21:20:29Z",
          "content": "The  Apple TV+ documentary Girls State and the HBO doc series Ren Faire led all projects in nominations in the Cinema Eye Honors broadcast categories, which were announced on Thursday in Los Angeles.… [+7109 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Investor's Business Daily"
          },
          "author": "Investor's Business Daily",
          "title": "Western Digital Stock Jumps On Better-Than-Expected Earnings, Strong Cloud Demand",
          "description": "Western Digital stock jumped late Thursday, after the data storage company reported earnings ahead of expectations for its September quarter.",
          "url": "https://www.investors.com/news/technology/western-digital-stock-wdc-earnings-q1-2025-september/",
          "urlToImage": "https://www.investors.com/wp-content/uploads/2017/09/Stock-westernDigital-01-company.jpg",
          "publishedAt": "2024-10-24T21:20:23Z",
          "content": "Western Digital (WDC) stock jumped late Thursday, after the data storage company reported a mixed fiscal first quarter. Earnings exceeded expectations while revenue came in slightly lower than what a… [+3079 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "NPR"
          },
          "author": "NPR",
          "title": "Are biodiversity efforts keeping up with the effects of climate change?",
          "description": "This week and next, world leaders are gathering in Colombia for the 16th United Nations Convention on Biological Diversity to check up on their collective progress in slowing biodiversity loss.<br><br>Can they successfully turn those plans into action against…",
          "url": "https://www.npr.org/2024/10/24/1211597334/are-biodiversity-efforts-keeping-up-with-the-effects-of-climate-change",
          "urlToImage": "https://media.npr.org/assets/img/2024/10/24/gettyimages-1245710168_wide-568793a91b4a8c4e3c71b7046bb27dd7c5067ac8.jpg?s=1400&c=100&f=jpeg",
          "publishedAt": "2024-10-24T21:18:59Z",
          "content": "A participant walks past waterfall poster at the Palais des congres during the United Nations Biodiversity Conference (COP15) in Montreal, Quebec, on December 18, 2022. (Photo by Lars Hagberg / AFP) … [+4598 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Idownloadblog.com"
          },
          "author": "Christian Zibreg",
          "title": "iOS 18.2 lets all iPhone owners set default apps for calling, messaging, browsing, etc.",
          "description": "iOS 18.2 permits all iPhone owners to set default apps for calling, messaging, browsing and more, not just folks living in the European Union (EU).",
          "url": "https://www.idownloadblog.com/2024/10/24/ios-18-2-iphone-default-apps/",
          "urlToImage": "https://media.idownloadblog.com/wp-content/uploads/2024/10/Apple-iOS-18.2-Settings-Default-Apps-Featured.jpg",
          "publishedAt": "2024-10-24T21:15:36Z",
          "content": "iOS 18.2 permits all iPhone owners to set default apps for calling, messaging, browsing and more, not just those privileged to live in the European Union (EU).\r\nSetting app defaults on iPhone. Image:… [+4086 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Livejournal.com"
          },
          "author": "zodgory",
          "title": "Halsey Impersonates Music Icons in Countdown to New Album",
          "description": "The countdown to The Great Impersonator begins. From now till the album drops on October 25th, I will be impersonating a different icon every day and teasing a snippet of the song they inspired ⭐️ THE GREAT IMPERSONATOR #1: the queen DOLLY PARTON !!!!!!TRACK …",
          "url": "https://ohnotheydidnt.livejournal.com/129426823.html",
          "urlToImage": "https://l-stat.livejournal.net/img/sign.png",
          "publishedAt": "2024-10-24T21:15:22Z",
          "content": "The countdown to The Great Impersonator begins. From now till the album drops on October 25th, I will be impersonating a different icon every day and teasing a snippet of the song they inspired \r\nTHE… [+7603 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Bloody Disgusting"
          },
          "author": "Jenn Adams",
          "title": "‘Ginger Snaps’ and the “Curse” of Becoming a Woman [The Lady Killers Podcast]",
          "description": "“I get this ache… And I, I thought it was for sex, but it’s to tear everything to fucking pieces.” We blame the curse of womanhood on Eve. The Bible tells us the first woman was tempted by a serpent to eat fruit from the tree of knowledge, thus dooming all of…",
          "url": "https://bloody-disgusting.com/podcasts/3837125/ginger-snaps-the-lady-killers-podcast/",
          "urlToImage": "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2024/10/lady-killers-ginger-snaps.jpeg?resize=1000%2C600&ssl=1",
          "publishedAt": "2024-10-24T21:14:22Z",
          "content": "Here’s a special spooky treat, trick or treaters: Earlier this week, We Hate Movies co-hosts Andrew Jupin and Eric Szyszka joined fellow Halloweeniesco-hosts Dan Caffrey and Michael Roffman in Haddon… [+1318 chars]"
      },
      {
          "source": {
              "id": "nbc-news",
              "name": "NBC News"
          },
          "author": "Bethany Heitman",
          "title": "29+ personalized holiday gifts",
          "description": "We rounded up 29+ personalized gifts for everyone on your list — including embroidered tote bags, customized photo puzzles, engraved jewelry and more.",
          "url": "https://www.nbcnews.com/select/shopping/best-personalized-gift-ideas-ncna1248010",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241022-personalized-gifts-lm-social-d2a1cd.jpg",
          "publishedAt": "2024-10-24T21:12:57Z",
          "content": "No matter who youre shopping for, putting thought into a great gift will make anyone on your list feel special. One way to do so is to opt for a creative personalized gift, such as engraved jewelry, … [+13395 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Slashdot.org"
          },
          "author": "feedfeeder",
          "title": "iOS 18.2 to Allow Third-Party Browser Web Apps With Custom Engines in EU - MacRumors",
          "description": "iOS 18.2 to Allow Third-Party Browser Web Apps With Custom Engines in EUMacRumors Apple releases new preview of its AI, including ChatGPT integrationCNBC Apple Releases iOS 18.2 Beta With New AI Features, Including ChatGPT IntegrationYahoo Finance iOS 18.1—Ne…",
          "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175319197",
          "urlToImage": null,
          "publishedAt": "2024-10-24T21:12:36Z",
          "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
      },
      {
          "source": {
              "id": null,
              "name": "Slate Magazine"
          },
          "author": "David Plotz, Emily Bazelon, and John Dickerson",
          "title": "Donald Trump Is a Disinhibited Fascist",
          "description": "And he might be re-elected President",
          "url": "https://slate.com/podcasts/political-gabfest/2024/10/election-donald-trumps-cognitive-abilities-fascist-gender-dei-diversity-inclusion-college",
          "urlToImage": "https://compote.slate.com/images/c575bfd0-66a9-4a83-b092-523ee84d0ff0.jpeg?crop=5000%2C3333%2Cx0%2Cy0&width=1560",
          "publishedAt": "2024-10-24T21:11:53Z",
          "content": "This week, Emily Bazelon, John Dickerson, and David Plotz discuss Donald Trumps fascism, disinhibition, and age; the state of young men in America with Rachel Simmons; and Diversity, Equity, and Incl… [+3059 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Shiftdelete.net"
          },
          "author": "Senem Beyza Aslan",
          "title": "iPhone 17 Pro Max tasarım konusunda sürpriz bir yenilik ile gelecek!",
          "description": "Önümüzdeki yıl piyasaya sürülecek amiral gemisi iPhone 17 Pro Max tasarım konusunda sürpriz bir yenilikle karşımıza çıkacak.\n\niPhone 17 Pro Max tasarım konusunda sürpriz bir yenilik ile gelecek!",
          "url": "https://shiftdelete.net/iphone-17-pro-max-tasarim-konusunda-surpriz-bir-yenilik-ile-gelecek",
          "urlToImage": "https://ares.shiftdelete.net/2024/10/iPhone-17-Pro-Max-daha-kucuk-bir-Dinamik-Ada-ile-gelecek.jpg",
          "publishedAt": "2024-10-24T21:10:34Z",
          "content": "Eylül aynda iPhone 16 serisini piyasaya süren Apple, önümüzdeki yl serinin yeni modelleri olan iPhone 17 ailesini piyasaya sürecek. Mevcut modeller dünya çapnda büyük sat rakamlarn görürken, pek çok … [+1722 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "MacRumors"
          },
          "author": "Juli Clover",
          "title": "You Won't Get These Apple Intelligence Features Until 2025",
          "description": "Apple plans to introduce the first Apple Intelligence features in iOS 18.1, debuting Writing Tools, notification summaries, smart replies, and more. iOS 18.1 will be followed by iOS 18.2, which Apple started testing this week.\n\n\n\n\n\niOS 18.2 has Genmoji, Image…",
          "url": "https://www.macrumors.com/2024/10/24/apple-intelligence-2025-features/",
          "urlToImage": "https://images.macrumors.com/t/QXQ3qDkhrxMrGY5_SLp7tyYc6bg=/1600x/article-new/2024/09/apple-intelligence-black.jpeg",
          "publishedAt": "2024-10-24T21:06:07Z",
          "content": "Apple plans to introduce the first Apple Intelligence features in iOS 18.1, debuting Writing Tools, notification summaries, smart replies, and more. iOS 18.1 will be followed by iOS 18.2, which Apple… [+2741 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Europapress.es"
          },
          "author": null,
          "title": "Trump dice que en caso de ganar las elecciones despedirá \"en segundos\" al fiscal especial Jack Smith",
          "description": "El expresidente de Estados Unidos Donald Trump ha asegurado este jueves que en caso de ganar las elecciones presidenciales del 5 de noviembre despediría \"en segundos\" al fiscal especial Jack Smith, quien lidera el caso federal en su contra por intentar revoca…",
          "url": "https://www.europapress.es/internacional/noticia-trump-dice-caso-ganar-elecciones-despedira-segundos-fiscal-especial-jack-smith-20241024230451.html",
          "urlToImage": "https://img.europapress.es/fotoweb/fotonoticia_20241024230451_1200.jpg",
          "publishedAt": "2024-10-24T21:04:51Z",
          "content": "MADRID 24 Oct. (EUROPA PRESS) - \r\n El expresidente de Estados Unidos Donald Trump ha asegurado este jueves que en caso de ganar las elecciones presidenciales del 5 de noviembre despediría \"en segundo… [+1904 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ferra.ru"
          },
          "author": "Николай Шелофастов",
          "title": "Топовая версия iPhone 16 подешевела в России",
          "description": "iPhone 16 Pro Max подешевел в России спустя месяц с начала продаж",
          "url": "https://www.ferra.ru/news/techlife/topovaya-versiya-iphone-16-podeshevela-v-rossii-24-10-2024.htm",
          "urlToImage": "https://www.ferra.ru/imgs/2024/10/24/20/6635929/c0d5404b7b3d07d2f76994ffd49e1efbe9825048.jpg",
          "publishedAt": "2024-10-24T21:04:17Z",
          "content": "iPhone 16 Pro Max, 2024 , 30 . 194 , 157 . .\r\niPhone 16 Pro Max Apple . Apple A18 Pro, . 48, 48 12 , 4685 6,9 OLED- 120 . Camera Control ."
      },
      {
          "source": {
              "id": null,
              "name": "Yahoo Entertainment"
          },
          "author": "The Hockey News",
          "title": "The Wraparound: Will Matvei Michkov Have A Better Rookie Season Than Connor Bedard?",
          "description": "Could Matvei Michkov stay healthy and get more points than Connor Bedard's rookie campaign? Should Owen Power be on the Sabres' power play? All that and much more.",
          "url": "https://sports.yahoo.com/wraparound-matvei-michkov-better-rookie-210240592.html",
          "urlToImage": "https://media.zenfs.com/en/the_hockey_news_articles_331/3282a2bc5c488d01c6666d55552e6e2c",
          "publishedAt": "2024-10-24T21:02:40Z",
          "content": "Welcome to The Hockey News Wraparound Show.\r\nEmma Lingan is joined by Michael Augello to discuss tons of topics in bite-sized segments. Here's what's on today's episode:\r\n0:00: Should the Utah Hockey… [+1396 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "New York Post"
          },
          "author": "Craig McCarthy",
          "title": "Prominent NYC attorney joins the race for Big Apple mayor",
          "description": "Jim Walden is billing himself as an apolitical candidate who wants to capture support from the right and left with hopes of mirroring the approach of former mayor Mike Bloomberg, he told The Post.",
          "url": "https://nypost.com/2024/10/24/us-news/prominent-nyc-attorney-joins-the-race-for-big-apple-mayor/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/10/nyc-mayor-race-jim-walden-comp.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2024-10-24T21:02:23Z",
          "content": "A prominent attorney who made a name taking cases in and around Big Apple politics is entering the already crowded field for mayor.\r\nJim Walden is billing himself as an apolitical candidate who wants… [+2076 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Bangkok Post"
          },
          "author": "Story by ARUSA PISUTHIPAN",
          "title": "Gross yet ghoulishly good",
          "description": "<p>Cocoa XO at Centara Grand at CentralWorld</p>",
          "url": "https://www.bangkokpost.com/life/social-and-lifestyle/2890008/gross-yet-ghoulishly-good",
          "urlToImage": "https://static.bangkokpost.com/media/content/dcx/2024/10/25/5320118_700.jpg",
          "publishedAt": "2024-10-24T21:00:00Z",
          "content": "Cocoa XO at Centara Grand at CentralWorld\r\nOct 31 until Nov 2\r\n Cocoa XO is offering three nights of spooky fun with spine-tingling surprises, wicked menus as well as a live DJ spinning hauntingly ad… [+11301 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "9to5Mac"
          },
          "author": "Filipe Espósito",
          "title": "iOS 18.2 lets you ask Siri about what’s on your screen",
          "description": "Even before releasing iOS 18.1 to the public, Apple has released the first developer beta of iOS 18.2, which includes many new Apple Intelligence features. One of the new features is the long-awaited integration with ChatGPT, and thanks to this, you can now a…",
          "url": "https://9to5mac.com/2024/10/24/ios-18-2-ask-siri-whats-on-your-screen/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/10/apple-intelligence-siri-chatgpt.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-10-24T20:57:56Z",
          "content": "Even before releasing iOS 18.1 to the public, Apple has released the first developer beta of iOS 18.2, which includes many new Apple Intelligence features. One of the new features is the long-awaited… [+2169 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Android Headlines"
          },
          "author": "Arthur Brown",
          "title": "The Marantz Horizon is basically a work of art that makes sound",
          "description": "Speakers come in the traditional boxy design, but you're not looking for that. You want speakers that can impress your friends when you have them over. If",
          "url": "https://www.androidheadlines.com/2024/10/marantz-horizon-grand-speakers.html",
          "urlToImage": "https://www.androidheadlines.com/wp-content/uploads/2024/10/Marantz-Horizon-Speaker-14.png",
          "publishedAt": "2024-10-24T20:57:42Z",
          "content": "Speakers come in the traditional boxy design, but youre not looking for that. You want speakers that can impress your friends when you have them over. If this sounds like you, then you might be in th… [+6924 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Applenovinky.cz"
          },
          "author": "AppleNovinky.cz | Nika Drunecká",
          "title": "S iOS 18.2 mohou uživatelé v Evropské unii smazat řadu systémových aplikací",
          "description": "S iOS 18.2 mohou uživatelé v Evropské unii smazat řadu základních aplikací, včetně App Store, Safari, Zprávy, Fotoaparát a Fotky. Apple v srpnu uvedl, že plánuje provést další změny, aby splnil zákon o digitálních trzích v Evropské unii. Jedna z těchto změn z…",
          "url": "https://applenovinky.cz/2024/10/s-ios-18-2-mohou-uzivatele-v-evropske-unii-smazat-radu-systemovych-aplikaci/",
          "urlToImage": "https://statscr.applenovinky.cz/wp-content/uploads/2024/10/iOS-18.2.jpg",
          "publishedAt": "2024-10-24T20:56:56Z",
          "content": "S iOS 18.2 mohou uivatelé v Evropské unii smazat adu základních aplikací, vetn App Store, Safari, Zprávy, Fotoaparát a Fotky. Apple v srpnu uvedl, e plánuje provést dalí zmny, aby splnil zákon o digi… [+316 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Smzdm.com"
          },
          "author": null,
          "title": "Apple 苹果 iPad mini 7 2024款 平板电脑（A17 Pro、128GB、WLAN版、蓝色） 3680.35元（需用券）",
          "description": "Apple 苹果 iPad mini 7 2024款 平板电脑（A17 Pro、128GB、WLAN版、蓝色） 3680.35元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
          "url": "https://www.smzdm.com/p/130050377/",
          "urlToImage": "https://qny.smzdm.com/202410/15/670e7871385f21513.jpg_d250.jpg",
          "publishedAt": "2024-10-24T20:56:50Z",
          "content": "iPad mini 7 A17 Pro 6 CPU5 GPU16 NPU Apple Intelligence iPadOS 18 \r\n 8.3 Liquid Retina 2266*1488 326 ppi500 Apple Pencil Pro\r\n 1200 5 1200 Wi-Fi 6E 5G USB-C 10Gbps ID"
      },
      {
          "source": {
              "id": null,
              "name": "TrekMovie"
          },
          "author": "Anthony Pascale",
          "title": "Recap/Review: ‘Lower Decks’ Takes On Star Trek Tropes In “Shades Of Green”",
          "description": "Mariner and Boimler try to end a class war as Tendi starts a pirate war.",
          "url": "https://trekmovie.com/2024/10/24/recap-review-lower-decks-takes-on-star-trek-tropes-in-shades-of-green/",
          "urlToImage": "https://trekmovie.com/wp-content/uploads/2024/10/lds-202-review-head2.jpg",
          "publishedAt": "2024-10-24T20:56:25Z",
          "content": "Shades of Green\r\nStar Trek: Lower Decks Season 5, Episode 2 Debuted Thursday, October 23, 2024Written by Keith FoglesongDirected by Bob Suarez\r\nA complicated series of stories all tie together themat… [+9104 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Sopitas.com"
          },
          "author": "Greta Padilla",
          "title": "El peligro de la IA, el futuro del cine y las audiencias: Alfonso Cuarón en el FICM 2024",
          "description": "Alfonso Cuarón llegó al Festival Internacional de Cine de Morelia (FICM) para presentar dos proyectos. El primero, un cortometraje animado para Disney+ titulado An Almost Christmas...\nThe post El peligro de la IA, el futuro del cine y las audiencias: Alfonso …",
          "url": "https://www.sopitas.com/cine-y-tv/peligro-ia-futuro-cine-audiencias-alfonso-cuaron-ficm-2024/",
          "urlToImage": "https://www.sopitas.com/wp-content/uploads/2024/10/alfonso-cuaron-conferencia-ficm-2024-disclaimer.jpg",
          "publishedAt": "2024-10-24T20:55:11Z",
          "content": "Alfonso Cuarón llegó al Festival Internacional de Cine de Morelia (FICM) para presentar dos proyectos. El primero, un cortometraje animado para Disney+ titulado An Almost Christmas Story, y su serie … [+4683 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Phandroid - News for Android"
          },
          "author": "Mike Viray",
          "title": "The Tensor G5 is Shaping Up to be a Formidable Chipset",
          "description": "Will Google finally perfect its Tensor chips?\nThe post The Tensor G5 is Shaping Up to be a Formidable Chipset appeared first on Phandroid.",
          "url": "https://phandroid.com/2024/10/24/the-tensor-g5-is-shaping-up-to-be-a-formidable-chipset/",
          "urlToImage": "https://phandroid.com/wp-content/uploads/2021/10/google-tensor-chip-2.png",
          "publishedAt": "2024-10-24T20:54:39Z",
          "content": "Google’s Tensor chips haven’t exactly been known for raw power and performance – yes, they’ll get you through the day, but they haven’t been the best SoCs on account of limitations when it comes to g… [+1508 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Longreads.com"
          },
          "author": "Peter Rubin",
          "title": "Writing in Pictures",
          "description": "\"Richard Scarry and the art of children’s literature.\"",
          "url": "http://longreads.com/2024/10/24/writing-in-pictures/",
          "urlToImage": null,
          "publishedAt": "2024-10-24T20:53:54Z",
          "content": "Since no one asked, Goodnight Moon and The Snowy Day are the two greatest children’s books ever created. But if we’re talking oeuvres, there’s no touching the voluminous, hyperdetailed work of Richar… [+1605 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Eldiario.es"
          },
          "author": "Serafí del Arco",
          "title": "Josep-Francesc Valls, economista: \"Muchos creen que son clase media y son mileuristas, fruto de la reducción de salarios\"",
          "description": "El periodista y catedrático en Esade analiza en su último libro, 'El efecto stick' la evolución de las clases medias en Europa y más concretamente en España y alerta de que los pocos ascensores sociales que existían han dejado de funcionar \r\n¿Cuánta gente cob…",
          "url": "https://www.eldiario.es/catalunya/economia/josep-francesc-valls-economista-creen-son-clase-media-son-mileuristas-fruto-reduccion-salarios_128_11758369.html",
          "urlToImage": "https://static.eldiario.es/clip/be79cfdd-5b45-4934-b1e6-565bd550a824_facebook-watermarked-aspect-ratio_default_0.jpg",
          "publishedAt": "2024-10-24T20:53:37Z",
          "content": "En El efecto stick (Profit Editorial), el periodista y catedrático de Dirección de Marketing en ESADE y profesor colaborador en la UPF Josep-Francesc Valls (Reus, 1947) relata con numerosísimos datos… [+11108 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Rlsbb.cc"
          },
          "author": "saamaan1@yahoo.com (Master)",
          "title": "iNet Network Scanner 3.1.3",
          "description": "iNet Network Scanner provides you with information about networks your Mac is connected to. Its very easy and user friendly design allows even the unexperienced user to get a profound and understandable overview of a network and the running services. iNet is …",
          "url": "https://post.rlsbb.cc/inet-network-scanner-3-1-3/",
          "urlToImage": null,
          "publishedAt": "2024-10-24T20:53:15Z",
          "content": "iNet Network Scanner provides you with information about networks your Mac is connected to. Its very easy and user friendly design allows even the unexperienced user to get a profound and understanda… [+432 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Securityaffairs.com"
          },
          "author": "Pierluigi Paganini",
          "title": "Pwn2Own Ireland 2024 Day 2: participants demonstrated an exploit against Samsung Galaxy S24",
          "description": "On the second day of Pwn2Own Ireland 2024, researchers demonstrated an exploit for the Samsung Galaxy S24.  On day two of Pwn2Own Ireland 2024, hackers demonstrated attacks against 51 zero-day vulnerabilities, earning a total of $358,625, prizes that we have …",
          "url": "https://securityaffairs.com/170221/hacking/pwn2own-ireland-2024-day-two.html",
          "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/10/image-25-768x1024.png",
          "publishedAt": "2024-10-24T20:52:07Z",
          "content": "Pwn2Own Ireland 2024 Day 2: participants demonstrated an exploit against Samsung Galaxy S24\r\n | Cisco fixed tens of vulnerabilities, including an actively exploited one\r\n | FortiJump flaw CVE-2024-47… [+111330 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Perfil.com"
          },
          "author": "Carolina Cuellar",
          "title": "Rosé y Bruno Mars ganan el primer lugar en el programa \"M! Countdown\" con \"APT.\"",
          "description": "La cantante y estrella de BLACKPINK felicitó a su par por ganar su primer programa musical y él respondió con un mensaje en coreano que enamoró a todos. Leer más",
          "url": "https://exitoina.perfil.com/noticias/musica/rose-y-bruno-mars-ganan-el-primer-lugar-en-el-programa-m-countdown-con-apt.phtml",
          "urlToImage": "https://fotos.perfil.com/2024/10/18/trim/1140/641/rose-y-bruno-mars-1894028.jpg",
          "publishedAt": "2024-10-24T20:49:23Z",
          "content": "El 24 de octubre, RoséyBruno Marsganaron el primer lugar en el programa \"M! Countdown\" con \"APT.\", uno de los shows televisivos más importantes de Corea del Sur.  \r\nEl encantador dúo ganó su primer p… [+4231 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Donanimhaber.com"
          },
          "author": "",
          "title": "iPad mini 7 oyunlarda tatmin edici bir performans sunuyor",
          "description": "iPad mini 7 tablet modelinin bir çekirdeği eksik grafik biriminin performansı merak ediliyordu. İki popüler oyunda yapılan testler kullanıcıların beklentilerinin karşılandığını gösteriyor.",
          "url": "https://www.donanimhaber.com/ipad-mini-7-ilk-testler-geldi--183470",
          "urlToImage": "https://www.donanimhaber.com/images/images/haber/183470/src_340x1912xipad-mini-7-ilk-testler-geldi.jpg",
          "publishedAt": "2024-10-24T20:49:00Z",
          "content": "a').click(); event.preventDefault();\"&gt;Tam Boyutta GörApplen sessiz sedasz duyurduu ancak ilemcisiyle biraz tepki toplayan iPad mini 7 tablet modelinin ilk oyun testleri gelmeye balad. Tableti satn… [+1043 chars]"
      }
  ] as any)
    //  fetchStockData("AAPL")
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Top Stock Suggestions</h1>
        <div className="flex flex-col items-end">
          <input
            type="date"
            className="bg-white text-gray-700 px-4 py-2 rounded focus:outline-none focus:ring"
            aria-label="Select Date"
            value={currentDate} // Set the current date as the value
            disabled
          />
          <p className="mt-1 text-gray-300 text-sm">Stock Market Opens at: 9:30 AM EST</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
