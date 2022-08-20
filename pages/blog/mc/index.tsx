import BlogItem from '../../../utils/components/blog/item';
import TagSelectedList from '../../../utils/components/blog/TagSelected';
import MainLayout from '../../../utils/layouts/main';
export default function index() {
    return(<MainLayout>
                    <TagSelectedList/>
            <div>
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
    </MainLayout>)
};
