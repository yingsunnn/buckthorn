import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry, Tag, User} from '../../shared';

@Component({
  selector: 'app-hot-entries',
  templateUrl: './hot-entries.component.html',
  styleUrls: ['./hot-entries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HotEntriesComponent implements OnInit {
  entries: Array<Entry> = new Array<Entry>();
  constructor() { }

  ngOnInit() {
    let entry: Entry = new Entry();
    
        let tags: Array<Tag> = new Array<Tag>();
        let tag1: Tag = new Tag();
        tag1.name = "网络";
        tags.push(tag1);
        let tag2: Tag = new Tag();
        tag2.name = "豆瓣";
        tags.push(tag2);
        let tag3: Tag = new Tag();
        tag3.name = "net";
        tags.push(tag3);
    
        let user: User = new User();
        user.id = "1";
        user.username = "Ying";
    
    
        entry.id = "1";
        entry.name = "B脸";
        entry.definition = "beautiful face的简称";
        entry.example = "请用您的B脸解锁手机.";
        entry.create_time = "Yesterday";
        entry.create_user = user;
        entry.tags = tags;
    
        let entry2: Entry = new Entry();
        entry2.id = "1";
        entry2.name = "高帅富";
        entry2.definition = "又作“高富帅”，形容一类男生：个子高（180+？），脸长得帅，家里富。常与白富美相结合，与屌丝相反。";
        entry2.example = "看过余罪吗？把余罪颠倒过来，就是典型高帅富啦。";
        entry2.create_time = "Yesterday";
        entry2.create_user = user;
        entry2.tags = tags;
    
        this.entries.push(entry);
        this.entries.push(entry2);
    
        console.log("entry: " + entry.name);
  }

}
