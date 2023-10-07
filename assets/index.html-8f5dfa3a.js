import{_ as i,r as d,o,c,b as e,d as s,e as t,a}from"./app-25dc9ec2.js";const l="/docs/assets/2023-10-04_120951-a55bb7a8.jpg",p="/docs/assets/2023-10-04_115834-fbd6a36d.jpg",r="/docs/assets/2023-10-04_123321-7fd2abdc.jpg",u="/docs/assets/2023-10-04_123838-1ec50bd2.jpg",m="/docs/assets/CD主要过程-71a7726b.png",h="/docs/assets/2023-10-06_114140-79916dcd.jpg",b="/docs/assets/2023-10-06_115207-fd0f06c5.jpg",v="/docs/assets/2023-10-07_092947-cd2a52be.jpg",g="/docs/assets/2023-10-07_143341-ddd3ca29.jpg",k="/docs/assets/2023-10-06_120251-444d495e.jpg",_="/docs/assets/2023-10-07_161634-dd0116e5.jpg",f="/docs/assets/2023-10-07_162255-bdffa6eb.jpg",j="/docs/assets/2023-10-07_165040-944bd6f1.jpg",x="/docs/assets/2023-10-07_175559-ed061312.jpg",J="/docs/assets/2023-10-07_080444-1428e744.jpg",y="/docs/assets/2023-10-07_145312-4d3cf9fb.jpg",N="/docs/assets/2023-10-07_182151-3ba990b5.jpg",D={},S=a(`<h1 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> Jenkins</h1><h2 id="提升镜像拉取速度-可选" tabindex="-1"><a class="header-anchor" href="#提升镜像拉取速度-可选" aria-hidden="true">#</a> 提升镜像拉取速度（可选）</h2><p>检查是否有加速配置，运行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>若返回类似以下文字则说明有镜像加速配置，但镜像源可能是未生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Registry Mirrors:
  https://hub-mirror.c.163.com/
  https://mirror.baidubce.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令，使源配置生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>若没有返回上述文字，则需要配置镜像源：</p><p>准备镜像配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.baidubce.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/docker
<span class="token function">vi</span> /etc/docker/daemon.json
<span class="token comment"># 将镜像 json 粘贴到 daemon.json 文件中，保存并退出后执行下面的命令</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像加速配置完成，加速生效。</p></li></ol><h2 id="使用-docker-安装-jenkins" tabindex="-1"><a class="header-anchor" href="#使用-docker-安装-jenkins" aria-hidden="true">#</a> 使用 docker 安装 Jenkins</h2><h3 id="安装与启动" tabindex="-1"><a class="header-anchor" href="#安装与启动" aria-hidden="true">#</a> 安装与启动</h3>`,7),w={href:"https://www.jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/",target:"_blank",rel:"noopener noreferrer"},P=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> jenkins <span class="token punctuation">\\</span>
  <span class="token parameter variable">-u</span> root <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /usr/local/jenkins_home:/var/jenkins_home <span class="token punctuation">\\</span>
  jenkins/jenkins:lts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后提示：<code>Unable to find image &#39;jenkins/jenkins:lts&#39; locally</code>，等待几秒钟后会自动拉取 <code>jenkins/jenkins:lts</code></p><p>等待拉取与安装完成…</p><h3 id="初次进入-jenkins" tabindex="-1"><a class="header-anchor" href="#初次进入-jenkins" aria-hidden="true">#</a> 初次进入 Jenkins</h3><p>首次打开 Jenkins 网页时需要输入初始密码</p><h4 id="获取初始密码" tabindex="-1"><a class="header-anchor" href="#获取初始密码" aria-hidden="true">#</a> 获取初始密码</h4><p>等待<code>docker run</code>运行完成，再运行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出以下文本，复制 <code>\${初始密码}</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

<span class="token variable">\${初始密码}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="复制初始密码"></p><h4 id="首次打开-jenkins" tabindex="-1"><a class="header-anchor" href="#首次打开-jenkins" aria-hidden="true">#</a> 首次打开 Jenkins</h4><ol><li><p>浏览器打开<code>http:${服务器 IP}:8080</code></p><p><img src="'+p+'" alt="初次进入Jenkins"></p></li><li><p>选择<code>安装推荐的插件</code></p><p>等待插件安装完成，有些插件可能会安装失败，多次重试安装后仍失败则直接跳过</p></li><li><p>创建第一个管理员用户</p><p>可以直接使用默认的 <code>admin</code> 账号登录（点击<code>使用admin账户继续</code>），也可以新建管理员用户；</p><p>为了防止他人猜到账号，这里选择新建管理员用户：填写完表单后点击右下角<code>保存并完成</code></p><p><img src="'+r+'" alt="创建第一个管理员用户"></p></li><li><p>配置实例</p><p>不需要通过域名访问时不需要更改 Jenkins URL，点击<code>保存并完成</code>即可</p><p><img src="'+u+`" alt="创建第一个管理员用户"></p></li><li><p>重启 Jenkins</p><p>即使已经安装了汉化插件有些文本仍是英文，重启后就能变成中文，手动运行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>Jenkins 的搭建已经完成，后文是通过 Jenkins 实现 CD：</p><h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> CD</h2><p>CD 的主要过程如下：</p><p><img src="`+m+'" alt="CD主要过程"></p><h3 id="安装-配置插件" tabindex="-1"><a class="header-anchor" href="#安装-配置插件" aria-hidden="true">#</a> 安装 &amp;&amp; 配置插件</h3><p>依次打开插件安装界面：<code>Dashboard - 系统管理 - 插件管理 - Available plugins</code></p><p>在搜索输入框内输入插件完整的名称、选中后点击<code>安装</code>按钮</p><p><img src="'+h+'" alt="安装插件"></p><ol><li><p><code>pull</code>：拉取代码</p><ol><li><p>安装插件：<code>Git</code>（通常作为默认插件在安装 Jenkins 时已自动安装）</p></li><li><p>插件安装完成过后依次打开 <code>Dashboard - 系统管理 - 系统配置</code>，找到<code>Git plugin</code>，填写本地 git 账户的昵称与邮箱、点击保存 <img src="'+b+'" alt="配置本地Git"></p></li><li><p>配置 gitlab 凭据</p><p>依次打开 <code>Dashboard - 系统管理 - 凭据管理 - 添加凭据</code>，找到<code>Git plugin</code><img src="'+v+'" alt="凭据管理"></p><p>选择<code>Username with password</code>，填入登录 gitlab 时使用的账号密码以及其他附属信息，最后点击<code>Create</code><img src="'+g+'" alt="创建凭据"></p></li></ol></li><li><p><code>build</code>：执行构建命令，需要 <code>nodejs</code> 环境</p><ol><li><p>安装插件：<code>NodeJS</code></p></li><li><p>插件安装完成过后依次打开<code>Dashboard - 系统管理 - 全局工具配置</code>，找到<code>NodeJS 安装</code>，点击<code>新增 NodeJS</code></p></li><li><p>选择 node 版本，并点击<code>保存</code><img src="'+k+'" alt="选择node版本"></p></li><li><p>更换<code>npm Taobao</code>源</p><ol><li><p>依次点开<code>Dashboard - 系统管理 - Managed files - Add a new Config</code></p></li><li><p>选择<code>Npm config file</code>，最后点击<code>Next</code><img src="'+_+'" alt="创建Npm-config-file"></p></li><li><p>在新表单中填入名称等必要项后点击<code>新增</code><img src="'+f+'" alt="创建Npm-config-file"></p></li><li><p>填入淘宝源：<code>https://registry.npm.taobao.org</code>后点击<code>Submit</code><img src="'+j+`" alt="创建Npm-config-file"></p></li></ol><div class="custom-container tip"><p class="custom-container-title">提示</p><p>也可以不配置更换 npm 源，构建时增加一行命令指定 npm 源也可以：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">--registry</span> https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></li></ol></li><li><p><code>deploy</code>：部署，需要连接别的服务器<code>传输文件</code>并执行<code>部署脚本</code></p><ol><li><p>安装插件：<code>Publish over SSH</code></p></li><li><p>插件安装完成过后依次打开 <code>Dashboard - 系统管理 - 系统配置</code>，找到<code>Publish over SSH</code>，点击<code>新增</code></p><p>填入服务器 IP、账号密码、根路径以及其他必要信息后点击保存 <img src="`+x+'" alt="创建构建任务"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>构建时调用插件传输文件的路径均是相对于该处填写的<code>Remote Directory</code>，因此填写成<code>根路径 /</code>比较方便</p></div></li></ol></li></ol><h3 id="创建构建任务" tabindex="-1"><a class="header-anchor" href="#创建构建任务" aria-hidden="true">#</a> 创建构建任务</h3><p>点击左侧“新建任务”，再分别输入项目名、选择项目类型，最后点击确定</p><p><img src="'+J+'" alt="创建构建任务"></p><ol><li><p>配置源码管理</p><p>选择 <code>Git</code>，填入代码<code>仓库地址</code>，选择登录 gitlab 的<code>凭据</code>，填写<code>分支</code>后点击确定</p><p><img src="'+y+'" alt="配置源码管理"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该步配置完后最好先执行构建一次，看看能否正常拉取代码，能正常拉取再继续后面的配置</p></div></li><li><p>配置构建环境</p><p>勾选<code>Provide Node &amp; npm bin/ folder to PATH</code><img src="'+N+'" alt="配置源码管理"></p></li></ol><h2 id="zdb-相关配置" tabindex="-1"><a class="header-anchor" href="#zdb-相关配置" aria-hidden="true">#</a> ZDB 相关配置</h2><p>账密：<code>zgadmin/pwd@jenkins</code></p><p>Publish Over SSH GitLab</p><p>Dashboard - Manage Jenkins - System Git plugin</p><p>Publish over SSH - 新增</p><p>Name zdb-prod-37 Hostname 37 Username root Remote Directory /</p><p>√ Use password authentication, or use a different key</p><p>NodeJS</p>',34);function C(q,G){const n=d("ExternalLinkIcon");return o(),c("div",null,[S,e("p",null,[s("官方教程："),e("a",w,[s("使用 npm 构建 Node.js 和 React 应用"),t(n)])]),P])}const z=i(D,[["render",C],["__file","index.html.vue"]]);export{z as default};
