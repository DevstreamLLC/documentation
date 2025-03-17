import{_ as e,c as a,a0 as s,o as i}from"./chunks/framework.BIwO_W-P.js";const u=JSON.parse('{"title":"Class: AuthApi","description":"","frontmatter":{},"headers":[],"relativePath":"classes/AuthApi.md","filePath":"classes/AuthApi.md"}'),o={name:"classes/AuthApi.md"};function h(r,t,d,n,l,p){return i(),a("div",null,t[0]||(t[0]=[s(`<p><a href="./../">@devstreamllc/ts-client</a> / AuthApi</p><h1 id="class-authapi" tabindex="-1">Class: AuthApi <a class="header-anchor" href="#class-authapi" aria-label="Permalink to &quot;Class: AuthApi&quot;">​</a></h1><p>AuthApi - object-oriented interface TypeScript Client Stubs for Devstream</p><h2 id="export" tabindex="-1">Export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;Export&quot;">​</a></h2><p>AuthApi</p><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><code>BaseAPI</code></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-authapi" tabindex="-1">new AuthApi() <a class="header-anchor" href="#new-authapi" aria-label="Permalink to &quot;new AuthApi()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AuthApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   configuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Configuration, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   basePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   axios</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AxiosInstance): AuthApi</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Default value</th></tr></thead><tbody><tr><td><p><code>configuration</code>?</p></td><td><p><a href="./Configuration.html"><code>Configuration</code></a></p></td><td><p><code>undefined</code></p></td></tr><tr><td><p><code>basePath</code>?</p></td><td><p><code>string</code></p></td><td><p><code>BASE_PATH</code></p></td></tr><tr><td><p><code>axios</code>?</p></td><td><p><code>AxiosInstance</code></p></td><td><p><code>globalAxios</code></p></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./AuthApi.html"><code>AuthApi</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BaseAPI.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifier</th><th>Type</th><th>Default value</th><th>Inherited from</th></tr></thead><tbody><tr><td><a id="axios-1"></a> <code>axios</code></td><td><code>protected</code></td><td><code>AxiosInstance</code></td><td><code>globalAxios</code></td><td><code>BaseAPI.axios</code></td></tr><tr><td><a id="basepath-1"></a> <code>basePath</code></td><td><code>protected</code></td><td><code>string</code></td><td><code>BASE_PATH</code></td><td><code>BaseAPI.basePath</code></td></tr><tr><td><a id="configuration-1"></a> <code>configuration</code></td><td><code>protected</code></td><td><a href="./Configuration.html"><code>Configuration</code></a></td><td><code>undefined</code></td><td><code>BaseAPI.configuration</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="authlogin" tabindex="-1">authLogin() <a class="header-anchor" href="#authlogin" aria-label="Permalink to &quot;authLogin()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(requestLogin: RequestLogin, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ResponseLogin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>requestLogin</code></p></td><td><p><a href="./../interfaces/RequestLogin.html"><code>RequestLogin</code></a></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/ResponseLogin.html"><code>ResponseLogin</code></a>&gt;&gt;</p><h4 id="throws" tabindex="-1">Throws <a class="header-anchor" href="#throws" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof" tabindex="-1">Memberof <a class="header-anchor" href="#memberof" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>AuthApi</p><hr><h3 id="authregister" tabindex="-1">authRegister() <a class="header-anchor" href="#authregister" aria-label="Permalink to &quot;authRegister()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authRegister</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(requestRegister: RequestRegister, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;void&gt;&gt;</span></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>requestRegister</code></p></td><td><p><a href="./../interfaces/RequestRegister.html"><code>RequestRegister</code></a></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<code>void</code>&gt;&gt;</p><h4 id="throws-1" tabindex="-1">Throws <a class="header-anchor" href="#throws-1" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-1" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-1" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>AuthApi</p><hr><h3 id="authrevalidate" tabindex="-1">authRevalidate() <a class="header-anchor" href="#authrevalidate" aria-label="Permalink to &quot;authRevalidate()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authRevalidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(requestAuthRevalidate: RequestAuthRevalidate, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ResponseAuthRevalidate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><p>This endpoint is used to revalidate the authentication token given the refresh token of the user. This endpoint returns a new valid authentication token. Without refresh token, this endpoint will not create a new authentication token. For getting an authentication token without refresh token, try logging in instead.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>requestAuthRevalidate</code></p></td><td><p><a href="./../interfaces/RequestAuthRevalidate.html"><code>RequestAuthRevalidate</code></a></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/ResponseAuthRevalidate.html"><code>ResponseAuthRevalidate</code></a>&gt;&gt;</p><h4 id="throws-2" tabindex="-1">Throws <a class="header-anchor" href="#throws-2" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-2" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-2" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>AuthApi</p><hr><h3 id="twofactorauth" tabindex="-1">twoFactorAuth() <a class="header-anchor" href="#twofactorauth" aria-label="Permalink to &quot;twoFactorAuth()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">twoFactorAuth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(requestTwofactorAuth: RequestTwofactorAuth, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ResponseLogin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><p>This is to validate the OTP generated if two factor authentication is enabled. The login ID must be tagged along with the OTP to map which login attempt this OTP belongs to.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>requestTwofactorAuth</code></p></td><td><p><a href="./../interfaces/RequestTwofactorAuth.html"><code>RequestTwofactorAuth</code></a></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/ResponseLogin.html"><code>ResponseLogin</code></a>&gt;&gt;</p><h4 id="throws-3" tabindex="-1">Throws <a class="header-anchor" href="#throws-3" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-3" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-3" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>AuthApi</p>`,60)]))}const k=e(o,[["render",h]]);export{u as __pageData,k as default};
