{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item">
        <a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i>
                {{ trans('backpack::base.dashboard') }}</a>
</li>


<x-backpack::menu-item title="Posts" icon="la la-edit" :link="backpack_url('post')" />
<!-- <x-backpack::menu-item title="Blocks" icon="la la-th-large" :link="backpack_url('block')" /> -->
<x-backpack::menu-item title="Blogs" icon="la la-blog" :link="backpack_url('blog')" />
<!-- <x-backpack::menu-item title="Comments" icon="la la-comments" :link="backpack_url('comment')" /> -->
<!-- <x-backpack::menu-item title="Credit cards" icon="la la-credit-card" :link="backpack_url('credit-card')" /> -->
<x-backpack::menu-item title="Images" icon="la la-image" :link="backpack_url('image')" />
<!-- <x-backpack::menu-item title="Likes" icon="la la-heart" :link="backpack_url('like')" /> -->
<x-backpack::menu-item title="Memberships" icon="la la-users" :link="backpack_url('membership')" />
<!-- <x-backpack::menu-item title="Messages" icon="la la-envelope" :link="backpack_url('message')" /> -->
<!-- <x-backpack::menu-item title="Notifications" icon="la la-bell" :link="backpack_url('notification')" /> -->
{{-- <x-backpack::menu-item title="Profiles" icon="la la-user" :link="backpack_url('profile')" /> --}}
<x-backpack::menu-item title="Reports" icon="la la-flag" :link="backpack_url('report')" />
<!-- <x-backpack::menu-item title="Settings" icon="la la-cog" :link="backpack_url('setting')" /> -->
<x-backpack::menu-item title="Stories" icon="la la-book" :link="backpack_url('story')" />
<x-backpack::menu-item title="Transactions" icon="la la-exchange-alt" :link="backpack_url('transaction')" />
<x-backpack::menu-item title="Users" icon="la la-user-friends" :link="backpack_url('user')" />