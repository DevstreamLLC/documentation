import{_ as t,c as a,a0 as s,o as i}from"./chunks/framework.BIwO_W-P.js";const k=JSON.parse('{"title":"Class: HealthApi","description":"","frontmatter":{},"headers":[],"relativePath":"classes/HealthApi.md","filePath":"classes/HealthApi.md"}'),h={name:"classes/HealthApi.md"};function o(d,e,r,n,l,p){return i(),a("div",null,e[0]||(e[0]=[s(`<p><a href="./../">@adityamayukhsom/client-typescript</a> / HealthApi</p><h1 id="class-healthapi" tabindex="-1">Class: HealthApi <a class="header-anchor" href="#class-healthapi" aria-label="Permalink to &quot;Class: HealthApi&quot;">​</a></h1><p>HealthApi - object-oriented interface TypeScript Client Stubs for Devstream</p><h2 id="export" tabindex="-1">Export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;Export&quot;">​</a></h2><p>HealthApi</p><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><code>BaseAPI</code></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-healthapi" tabindex="-1">new HealthApi() <a class="header-anchor" href="#new-healthapi" aria-label="Permalink to &quot;new HealthApi()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HealthApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   configuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Configuration, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   basePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   axios</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AxiosInstance): HealthApi</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Default value</th></tr></thead><tbody><tr><td><p><code>configuration</code>?</p></td><td><p><a href="./Configuration.html"><code>Configuration</code></a></p></td><td><p><code>undefined</code></p></td></tr><tr><td><p><code>basePath</code>?</p></td><td><p><code>string</code></p></td><td><p><code>BASE_PATH</code></p></td></tr><tr><td><p><code>axios</code>?</p></td><td><p><code>AxiosInstance</code></p></td><td><p><code>globalAxios</code></p></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./HealthApi.html"><code>HealthApi</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BaseAPI.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifier</th><th>Type</th><th>Default value</th><th>Inherited from</th></tr></thead><tbody><tr><td><a id="axios-1"></a> <code>axios</code></td><td><code>protected</code></td><td><code>AxiosInstance</code></td><td><code>globalAxios</code></td><td><code>BaseAPI.axios</code></td></tr><tr><td><a id="basepath-1"></a> <code>basePath</code></td><td><code>protected</code></td><td><code>string</code></td><td><code>BASE_PATH</code></td><td><code>BaseAPI.basePath</code></td></tr><tr><td><a id="configuration-1"></a> <code>configuration</code></td><td><code>protected</code></td><td><a href="./Configuration.html"><code>Configuration</code></a></td><td><code>undefined</code></td><td><code>BaseAPI.configuration</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="healthcheck" tabindex="-1">healthCheck() <a class="header-anchor" href="#healthcheck" aria-label="Permalink to &quot;healthCheck()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">healthCheck</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HealthResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><p>Health check for the API.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/HealthResponse.html"><code>HealthResponse</code></a>&gt;&gt;</p><h4 id="throws" tabindex="-1">Throws <a class="header-anchor" href="#throws" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof" tabindex="-1">Memberof <a class="header-anchor" href="#memberof" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>HealthApi</p>`,29)]))}const u=t(h,[["render",o]]);export{k as __pageData,u as default};
