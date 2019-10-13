(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{165:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("In this guide we will install Pterodactyl — including all of it's dependencies — and configure our webserver to serve it using SSL.")]),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This guide is based off the "),s("router-link",{attrs:{to:"/panel/getting_started.html"}},[t._v("official installation documentation")]),t._v(" but is tailored specifically for CentOS 8.")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("We will install all of Pterodactyl's "),s("router-link",{attrs:{to:"/panel/getting_started.html#dependencies"}},[t._v("required")]),t._v(" dependencies and a few aditional utilities.")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("We recommend the remi repo to get the latest php packages.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("The following command will allow nginx to work with redis and")]),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("This following section covers the configuration of parts of the server to run the panel.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),s("p",[t._v("The following are safe defaults.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("To add your first user to the database, see our tutorial on "),s("router-link",{attrs:{to:"/tutorials/mysql_setup.html"}},[t._v("setting up MySQL")]),t._v(".")],1),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),s("p",[t._v("Start and enable php-fpm on the system.")]),t._v(" "),t._m(33),t._m(34),t._v(" "),s("p",[t._v("Please check our "),s("router-link",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("tutorial")]),t._v(" on generating SSL certificates for more information.")],1),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),s("p",[t._v("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into\n"),s("a",{attrs:{href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"}},[t._v("running another Redis instance"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),s("router-link",{attrs:{to:"/panel/getting_started.html#download-files"}},[t._v("official Panel installation documentation")]),t._v(".")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"centos-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-8","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS 8")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-requirements-and-additional-utilities"}},[t._v("Install Requirements and Additional Utilities")]),s("ul",[s("li",[s("a",{attrs:{href:"#selinux-tools"}},[t._v("SELinux tools")])]),s("li",[s("a",{attrs:{href:"#mariadb"}},[t._v("MariaDB")])]),s("li",[s("a",{attrs:{href:"#php-7-2"}},[t._v("PHP 7.2")])]),s("li",[s("a",{attrs:{href:"#composer"}},[t._v("Composer")])])])]),s("li",[s("a",{attrs:{href:"#install-utility-pakcages"}},[t._v("Install Utility Pakcages")]),s("ul",[s("li",[s("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),s("li",[s("a",{attrs:{href:"#redis"}},[t._v("Redis")])])])]),s("li",[s("a",{attrs:{href:"#server-configuration"}},[t._v("Server Configuration")]),s("ul",[s("li",[s("a",{attrs:{href:"#configuring-mariadb"}},[t._v("Configuring MariaDB")])]),s("li",[s("a",{attrs:{href:"#setup-php"}},[t._v("Setup PHP")])]),s("li",[s("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),s("li",[s("a",{attrs:{href:"#redis-setup"}},[t._v("Redis Setup")])])])]),s("li",[s("a",{attrs:{href:"#installing-the-panel"}},[t._v("Installing the Panel")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-requirements-and-additional-utilities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements-and-additional-utilities","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Requirements and Additional Utilities")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("If you run "),e("code",[this._v("sestatus")]),this._v(" and it shows "),e("code",[this._v("SELinux status: enabled")]),this._v(" you should install the following packages for later")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"selinux-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux-tools","aria-hidden":"true"}},[this._v("#")]),this._v(" SELinux tools")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("dnf "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y policycoreutils selinux-policy selinux-policy-targeted setroubleshoot-server setools setools-console mcstrans\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mariadb","aria-hidden":"true"}},[this._v("#")]),this._v(" MariaDB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("dnf "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y mariadb mariadb-server\n\n"),e("span",{attrs:{class:"token comment"}},[this._v("## Start maraidb")]),this._v("\nsystemctl start mariadb\nsystemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" mariadb\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"php-7-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-7-2","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP 7.2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[this._v("## Get dnf updates")]),this._v("\ndnf update -y\n\n"),e("span",{attrs:{class:"token comment"}},[this._v("## Install PHP 7.2")]),this._v("\ndnf "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y php php-common php-fpm php-cli php-json php-mysqlnd php-gd php-mbstring php-pdo php-zip php-bcmath php-dom php-opcache\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[this._v("#")]),this._v(" Composer")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dnf "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),s("span",{attrs:{class:"token function"}},[t._v("zip")]),t._v(" unzip "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("# Required for Composer")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://getcomposer.org/installer "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" php -- --install-dir"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin --filename"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("composer\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-utility-pakcages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-utility-pakcages","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Utility Pakcages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("dnf "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y nginx\n\nfirewall-cmd --add-service"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("http --permanent\nfirewall-cmd --add-service"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("https --permanent \nfirewall-cmd --reload\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("dnf "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y redis\n\nsystemctl start redis\nsystemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" redis\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"selinux-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" SELinux commands")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("setsebool -P httpd_can_network_connect 1\nsetsebool -P httpd_execmem 1\nsetsebool -P httpd_unified 1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"server-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Server Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuring-mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-mariadb","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring MariaDB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The fastest way to set up mariadb is to use the "),e("code",[this._v("mysql_secure_installation")]),this._v(" command and follow prompts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("mysql_secure_installation\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Change to your own secure password"),e("br"),this._v(" "),e("code",[this._v("Set root password? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get rid of users that could access the db by default"),e("br"),this._v(" "),e("code",[this._v("Remove anonymous users? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Keep root off the external interfaces"),e("br"),this._v(" "),e("code",[this._v("Disallow root login remotely? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Extra databases that aren't needed"),e("br"),this._v(" "),e("code",[this._v("Remove test database and access to it? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Clears and sets all the changes made"),e("br"),this._v(" "),e("code",[this._v("Reload privilege tables now? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All done! If you've completed all of the above steps, your MariaDB"),e("br"),this._v("\ninstallation should now be secure.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"adding-mariadb-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-mariadb-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding MariaDB user")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setup-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-php","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup PHP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Place the contents below in a file inside the "),e("code",[this._v("/etc/php-fpm.d")]),this._v(" folder. The file can be named anything, but a good standard is "),e("code",[this._v("www-pterodactyl.conf")]),this._v(". This config will match the nginx config later in the guide.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[pterodactyl]\n\nuser = nginx\ngroup = nginx\n\nlisten = /var/run/php-fpm/pterodactyl.sock\nlisten.owner = nginx\nlisten.group = nginx\nlisten.mode = 0750\n\npm = ondemand\npm.max_children = 9\npm.process_idle_timeout = 10s\npm.max_requests = 200")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" php-fpm\nsystemctl start php-fpm\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nginx-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ssl-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssl-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" SSL Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-conf extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n    \n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2;\n    ssl_ciphers \'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256\';\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/var/run/php-fpm/pterodactyl.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"redis-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-the-panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-panel","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing the Panel")])}],!1,null,null,null);e.default=n.exports}}]);