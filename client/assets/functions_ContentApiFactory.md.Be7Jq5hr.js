import{_ as e,c as t,a0 as o,o as n}from"./chunks/framework.BIwO_W-P.js";const u=JSON.parse('{"title":"Function: ContentApiFactory()","description":"","frontmatter":{},"headers":[],"relativePath":"functions/ContentApiFactory.md","filePath":"functions/ContentApiFactory.md"}'),r={name:"functions/ContentApiFactory.md"};function i(s,a,h,l,d,c){return n(),t("div",null,a[0]||(a[0]=[o(`<p><a href="./../">@adityamayukhsom/client-typescript</a> / ContentApiFactory</p><h1 id="function-contentapifactory" tabindex="-1">Function: ContentApiFactory() <a class="header-anchor" href="#function-contentapifactory" aria-label="Permalink to &quot;Function: ContentApiFactory()&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ContentApiFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   configuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   basePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   axios</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span></span></code></pre></div><p>ContentApi - factory interface TypeScript Client Stubs for Devstream</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="configuration" tabindex="-1">configuration? <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;configuration?&quot;">​</a></h3><p><a href="./../classes/Configuration.html"><code>Configuration</code></a></p><h3 id="basepath" tabindex="-1">basePath? <a class="header-anchor" href="#basepath" aria-label="Permalink to &quot;basePath?&quot;">​</a></h3><p><code>string</code></p><h3 id="axios" tabindex="-1">axios? <a class="header-anchor" href="#axios" aria-label="Permalink to &quot;axios?&quot;">​</a></h3><p><code>AxiosInstance</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>object</code></p><h3 id="deletecontent" tabindex="-1">deleteContent() <a class="header-anchor" href="#deletecontent" aria-label="Permalink to &quot;deleteContent()&quot;">​</a></h3><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid" tabindex="-1">contentId <a class="header-anchor" href="#contentid" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="options" tabindex="-1">options? <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<code>void</code>&gt;</p><h4 id="throws" tabindex="-1">Throws <a class="header-anchor" href="#throws" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="getallcontentbyuserid" tabindex="-1">getAllContentByUserId() <a class="header-anchor" href="#getallcontentbyuserid" aria-label="Permalink to &quot;getAllContentByUserId()&quot;">​</a></h3><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="filter" tabindex="-1">filter? <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter?&quot;">​</a></h5><p><code>string</code></p><p>Filter content (e.g., by date or platform).</p><h5 id="options-1" tabindex="-1">options? <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<a href="./../interfaces/ContentListResponse.html"><code>ContentListResponse</code></a>&gt;</p><h4 id="throws-1" tabindex="-1">Throws <a class="header-anchor" href="#throws-1" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="getcontentanalytics" tabindex="-1">getContentAnalytics() <a class="header-anchor" href="#getcontentanalytics" aria-label="Permalink to &quot;getContentAnalytics()&quot;">​</a></h3><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid-1" tabindex="-1">contentId <a class="header-anchor" href="#contentid-1" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="options-2" tabindex="-1">options? <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<a href="./../interfaces/ContentAnalytics.html"><code>ContentAnalytics</code></a>&gt;</p><h4 id="throws-2" tabindex="-1">Throws <a class="header-anchor" href="#throws-2" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="getcontentdetails" tabindex="-1">getContentDetails() <a class="header-anchor" href="#getcontentdetails" aria-label="Permalink to &quot;getContentDetails()&quot;">​</a></h3><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid-2" tabindex="-1">contentId <a class="header-anchor" href="#contentid-2" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="options-3" tabindex="-1">options? <a class="header-anchor" href="#options-3" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<a href="./../interfaces/ContentDetails.html"><code>ContentDetails</code></a>&gt;</p><h4 id="throws-3" tabindex="-1">Throws <a class="header-anchor" href="#throws-3" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="getcontentstatus" tabindex="-1">getContentStatus() <a class="header-anchor" href="#getcontentstatus" aria-label="Permalink to &quot;getContentStatus()&quot;">​</a></h3><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid-3" tabindex="-1">contentId <a class="header-anchor" href="#contentid-3" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="options-4" tabindex="-1">options? <a class="header-anchor" href="#options-4" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<a href="./../interfaces/ContentStatusResponse.html"><code>ContentStatusResponse</code></a>&gt;</p><h4 id="throws-4" tabindex="-1">Throws <a class="header-anchor" href="#throws-4" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="getpendinginvitations" tabindex="-1">getPendingInvitations() <a class="header-anchor" href="#getpendinginvitations" aria-label="Permalink to &quot;getPendingInvitations()&quot;">​</a></h3><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid-4" tabindex="-1">contentId <a class="header-anchor" href="#contentid-4" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="options-5" tabindex="-1">options? <a class="header-anchor" href="#options-5" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<a href="./../interfaces/CollaborationActionResponse.html"><code>CollaborationActionResponse</code></a>&gt;</p><h4 id="throws-5" tabindex="-1">Throws <a class="header-anchor" href="#throws-5" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="sendcollaborationinvitations" tabindex="-1">sendCollaborationInvitations() <a class="header-anchor" href="#sendcollaborationinvitations" aria-label="Permalink to &quot;sendCollaborationInvitations()&quot;">​</a></h3><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid-5" tabindex="-1">contentId <a class="header-anchor" href="#contentid-5" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="collaborationrequest" tabindex="-1">collaborationRequest <a class="header-anchor" href="#collaborationrequest" aria-label="Permalink to &quot;collaborationRequest&quot;">​</a></h5><p><a href="./../interfaces/CollaborationRequest.html"><code>CollaborationRequest</code></a></p><h5 id="options-6" tabindex="-1">options? <a class="header-anchor" href="#options-6" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<code>void</code>&gt;</p><h4 id="throws-6" tabindex="-1">Throws <a class="header-anchor" href="#throws-6" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h3 id="updatependinginvitesforcontentbyid" tabindex="-1">updatePendingInvitesForContentById() <a class="header-anchor" href="#updatependinginvitesforcontentbyid" aria-label="Permalink to &quot;updatePendingInvitesForContentById()&quot;">​</a></h3><p>The user can accept or decline content request invitation. Need to consider whether to make a new endpoint for accept/decline invitations and use this endpoint for modifying access control instead. Reference of Google Zanziber can be used for access control.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="contentid-6" tabindex="-1">contentId <a class="header-anchor" href="#contentid-6" aria-label="Permalink to &quot;contentId&quot;">​</a></h5><p><code>string</code></p><h5 id="collaborationactionresponse" tabindex="-1">collaborationActionResponse <a class="header-anchor" href="#collaborationactionresponse" aria-label="Permalink to &quot;collaborationActionResponse&quot;">​</a></h5><p><a href="./../interfaces/CollaborationActionResponse.html"><code>CollaborationActionResponse</code></a></p><h5 id="options-7" tabindex="-1">options? <a class="header-anchor" href="#options-7" aria-label="Permalink to &quot;options?&quot;">​</a></h5><p><code>RawAxiosRequestConfig</code></p><p>Override http request option.</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>AxiosPromise</code>&lt;<code>void</code>&gt;</p><h4 id="throws-7" tabindex="-1">Throws <a class="header-anchor" href="#throws-7" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h2 id="export" tabindex="-1">Export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;Export&quot;">​</a></h2>`,100)]))}const b=e(r,[["render",i]]);export{u as __pageData,b as default};
