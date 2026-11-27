(()=>{'use strict';const store='jagoan-hosting.language.v1',map={
'Jagoan Hosting | Rekomendasi The Choco Studios':{en:'Jagoan Hosting | The Choco Studios recommendation',zh:'Jagoan Hosting｜The Choco Studios 推荐'},
'Temukan Layanan Hosting yang Sesuai':{en:'Find the right hosting service',zh:'找到适合您的主机服务'},
'Sedang menyiapkan website atau membutuhkan lingkungan server untuk proyek? Lihat pilihan layanan Jagoan Hosting di bawah ini, lalu periksa detailnya langsung di situs penyedia.':{en:'Preparing a website or need a server environment for a project? Explore the Jagoan Hosting services below, then check the details directly on the provider’s website.',zh:'正在准备网站或需要项目服务器环境？请查看以下 Jagoan Hosting 服务选项，并直接在服务提供商网站查看详情。'},
'Jelajahi informasi layanan VPS X dari Jagoan Hosting dan periksa detailnya di halaman penyedia.':{en:'Explore information about Jagoan Hosting’s VPS X service and review the details on the provider’s page.',zh:'了解 Jagoan Hosting 的 VPS X 服务信息，并在服务提供商页面查看详细内容。'},
'Temukan informasi pilihan hosting untuk website dan lihat detail layanan langsung dari penyedia.':{en:'Explore hosting options for your website and view service details directly from the provider.',zh:'查找适合网站的主机方案，并直接从服务提供商处查看服务详情。'},
'Lihat Halaman VPS X':{en:'View VPS X page',zh:'查看 VPS X 页面'},
'Lihat Halaman Hosting':{en:'View hosting page',zh:'查看主机页面'},
'Kembali ke The Choco Studios':{en:'Back to The Choco Studios',zh:'返回 The Choco Studios'},
'Kembali ke TCS':{en:'Back to TCS',zh:'返回 TCS'},
'THE CHOCO STUDIOS':{en:'THE CHOCO STUDIOS',zh:'THE CHOCO STUDIOS'},
'VPS X':{en:'VPS X',zh:'VPS X'},
'Hosting':{en:'Hosting',zh:'主机服务'},
'Pilih kategori layanan':{en:'Choose a service category',zh:'选择服务类别'},
'Jagoan Hosting adalah merek milik pemiliknya masing-masing.':{en:'Jagoan Hosting is a trademark of its respective owner.',zh:'Jagoan Hosting 是其各自所有者的商标。'}

,'← PILIH LAYANAN':{en:'← CHOOSE A SERVICE',zh:'← 选择服务'}
,'Pilihan Hosting Jagoan Hosting':{en:'Jagoan Hosting hosting options',zh:'Jagoan Hosting 主机方案'}
,'Jelajahi pilihan layanan hosting untuk website Anda melalui informasi resmi Jagoan Hosting.':{en:'Explore hosting services for your website through official Jagoan Hosting information.',zh:'通过 Jagoan Hosting 官方信息了解适合您网站的主机服务。'}
,'Banner tidak dapat dimuat. Anda tetap dapat membuka informasi melalui tautan ini.':{en:'The banner could not be loaded. You can still open the information using this link.',zh:'横幅无法加载。您仍可通过此链接查看信息。'}
,'Pilih Hosting untuk Kebutuhan Website':{en:'Choose hosting for your website needs',zh:'为您的网站需求选择主机服务'}
,'Setiap website memiliki kebutuhan yang berbeda. Kenali pilihan layanan hosting, lalu cocokkan informasi paket dengan tujuan dan kebutuhan website Anda.':{en:'Every website has different needs. Explore the hosting options, then compare package details with your website goals and requirements.',zh:'每个网站的需求都不同。了解主机服务选项，并根据网站目标与需求比较套餐详情。'}
,'Untuk pemilik website pribadi atau usaha.':{en:'For personal or business website owners.',zh:'适合个人或企业网站所有者。'}
,'Untuk proyek yang ingin hadir dan diakses secara online.':{en:'For projects that need to be available online.',zh:'适合需要在线发布和访问的项目。'}
,'Untuk calon pengguna yang ingin membandingkan pilihan hosting.':{en:'For prospective users comparing hosting options.',zh:'适合希望比较主机方案的潜在用户。'}
,'Jangan terburu-buru memilih. Periksa detail layanan, ketentuan, dan informasi terbaru langsung dari penyedia.':{en:'Take your time. Review service details, terms, and the latest information directly from the provider.',zh:'请勿仓促选择。请直接向服务提供商核实服务详情、条款及最新信息。'}
,'Sesuaikan dengan kebutuhan Anda':{en:'Choose what fits your needs',zh:'选择符合您需求的方案'}
,'Pelajari informasi resmi sebelum mendaftar. Harga, fitur, dan ketentuan layanan mengikuti informasi yang ditampilkan oleh Jagoan Hosting.':{en:'Review official information before registering. Prices, features, and service terms are subject to the information published by Jagoan Hosting.',zh:'注册前请先查看官方信息。价格、功能和服务条款以 Jagoan Hosting 发布的信息为准。'}
,'Lihat Pilihan Hosting':{en:'View hosting options',zh:'查看主机方案'}
,'Rekomendasi Hosting':{en:'Hosting recommendations',zh:'主机推荐'}
,'Klik banner untuk melihat informasi dari Jagoan Hosting.':{en:'Select the banner to view information from Jagoan Hosting.',zh:'点击横幅查看 Jagoan Hosting 的相关信息。'}
,'Kembali ke The Choco Studios':{en:'Back to The Choco Studios',zh:'返回 The Choco Studios'}
,'Pilih layanan lainnya':{en:'Choose another service',zh:'选择其他服务'}
,'Informasi VPS X Jagoan Hosting':{en:'Jagoan Hosting VPS X information',zh:'Jagoan Hosting VPS X 信息'}
,'Jelajahi informasi layanan VPS X dari Jagoan Hosting dan periksa kecocokannya dengan kebutuhan proyek Anda.':{en:'Explore Jagoan Hosting VPS X and see whether it fits your project requirements.',zh:'了解 Jagoan Hosting VPS X 服务，并评估其是否符合您的项目需求。'}
,'Kenali Pilihan VPS X untuk Proyek Anda':{en:'Explore VPS X options for your project',zh:'了解适合您项目的 VPS X 方案'}
,'Jika proyek membutuhkan lingkungan server virtual, VPS bisa menjadi salah satu opsi yang layak dipelajari. Baca informasi layanan dan ketentuan resminya sebelum menentukan pilihan.':{en:'If your project needs a virtual server environment, a VPS may be worth considering. Read the official service information and terms before deciding.',zh:'如果您的项目需要虚拟服务器环境，VPS 可能是值得考虑的选择。作出决定前，请阅读官方服务信息与条款。'}
,'Untuk pengembang yang sedang mengevaluasi layanan VPS.':{en:'For developers evaluating VPS services.',zh:'适合正在评估 VPS 服务的开发者。'}
,'Untuk proyek digital yang membutuhkan lingkungan server virtual.':{en:'For digital projects that need a virtual server environment.',zh:'适合需要虚拟服务器环境的数字项目。'}
,'Untuk pengguna yang ingin membandingkan informasi paket dari penyedia.':{en:'For users comparing provider package information.',zh:'适合希望比较服务商套餐信息的用户。'}
,'Luangkan waktu untuk memeriksa detail layanan, kebutuhan teknis, serta ketentuan yang berlaku di situs Jagoan Hosting.':{en:'Take time to review service details, technical requirements, and applicable terms on the Jagoan Hosting website.',zh:'请花时间在 Jagoan Hosting 网站查看服务详情、技术要求及适用条款。'}
,'Periksa detail sebelum memilih':{en:'Review the details before choosing',zh:'选择前请核实详情'}
,'Pastikan informasi paket yang ditawarkan sesuai dengan kebutuhan proyek Anda. Detail harga, spesifikasi, dan ketentuan dapat berubah, sehingga rujuk halaman resmi penyedia untuk informasi terbaru.':{en:'Make sure the offered package matches your project requirements. Prices, specifications, and terms may change, so consult the provider’s official page for current information.',zh:'请确认所提供的套餐符合您的项目需求。价格、规格和条款可能会变更，因此请以服务商官方页面的最新信息为准。'}
,'Lihat Informasi VPS X':{en:'View VPS X information',zh:'查看 VPS X 信息'}
,'Informasi VPS X':{en:'VPS X information',zh:'VPS X 信息'}
};const norm=s=>String(s||'').replace(/\s+/g,' ').trim(),orig=new WeakMap(),applied=new WeakMap();let lang='id';function scan(){const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(!n.parentElement||n.parentElement.closest('script,style,noscript,pre,code,#tcs-language-control'))continue;const cur=n.nodeValue||'';if(applied.has(n)&&cur!==applied.get(n))orig.set(n,cur);if(!orig.has(n))orig.set(n,cur);const raw=orig.get(n),v=norm(raw),t=lang==='id'?v:(map[v]?.[lang]||v);n.nodeValue=(raw.match(/^\s*/)||[''])[0]+t+(raw.match(/\s*$/)||[''])[0];applied.set(n,n.nodeValue);}}function set(code){lang=['id','en','zh'].includes(code)?code:'id';try{localStorage.setItem(store,lang)}catch{}document.documentElement.lang=lang==='zh'?'zh-CN':lang;const s=document.querySelector('#tcs-language-select');if(s)s.value=lang;const l=document.querySelector('#tcs-language-control label');if(l)l.textContent=lang==='id'?'Bahasa':lang==='zh'?'语言':'Language';scan();}function init(){const box=document.createElement('div');box.id='tcs-language-control';box.innerHTML='<label for="tcs-language-select">Bahasa</label><select id="tcs-language-select" aria-label="Pilih bahasa"><option value="id">ID · Indonesia</option><option value="en">EN · English</option><option value="zh">中文 · Mandarin</option></select>';const css=document.createElement('style');css.textContent='#tcs-language-control{position:fixed;top:14px;right:14px;z-index:10000;display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid #dbe1ec;border-radius:12px;background:rgba(255,255,255,.96);color:#172033;box-shadow:0 8px 26px #17203318;font:500 12px/1.2 system-ui,sans-serif}#tcs-language-control select{border:0;background:transparent;color:inherit;font:inherit;cursor:pointer}#tcs-language-control option{color:#172033;background:#fff}@media(max-width:640px){#tcs-language-control{top:9px;right:9px;padding:6px 8px}#tcs-language-control label{display:none}}';document.head.append(css);document.body.append(box);box.querySelector('select').addEventListener('change',e=>set(e.target.value));let saved='id';try{const v=localStorage.getItem(store);if(['id','en','zh'].includes(v))saved=v}catch{}set(saved);}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();})();