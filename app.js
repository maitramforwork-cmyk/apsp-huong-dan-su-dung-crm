const LESSONS = [
    {
        title: "BƯỚC 1: TẠO LEAD",
        roles: "Vai trò: SALE, ADMIN",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>1.1. CUNG CẤP THÔNG TIN CÔNG TY VÀ NGƯỜI ĐẠI DIỆN LIÊN HỆ</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: Hàng tuần</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>1.2. TẠO THƯƠNG VỤ (NHẬP LIỆU BASE CRM)</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: ADMIN</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 1-3 ngày</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 1.2/ Base CRM</span>
                    </div>
                </div>
            </div>
            
            <div class="golden-rule-box">
                <h4><i class="fa-solid fa-triangle-exclamation"></i> LƯU Ý VÀNG KHI NHẬP LIỆU</h4>
                <ul>
                    <li><strong>Tên Công ty:</strong> Ghi đúng theo tên đăng ký MST - <strong>CAPSLOCK</strong>. (Vd: CÔNG TY CỔ PHẦN AP SAIGON PETRO)</li>
                    <li><strong>Tên Liên hệ:</strong> Viết hoa chữ cái đầu. (Vd: Nguyễn Văn A)</li>
                    <li><strong>Tìm kiếm số điện thoại:</strong> Không chứa số 0 ở đầu khi search.</li>
                </ul>
            </div>

            <div class="action-guide-box">
                <h4><i class="fa-solid fa-laptop-code"></i> HƯỚNG DẪN THAO TÁC TRÊN BASE CRM</h4>
                <p>1. Truy cập vào web CRM bằng đường link: <strong>https://login.basecrm.vn/</strong></p>
                <p>2. Nhập tài khoản CRM mà công ty cấp, click vào ứng dụng <strong>Sale</strong>.</p>
                <p><strong>Làm sao để tạo 1 thương vụ mới? (Sử dụng Cách 2 - Gián tiếp):</strong></p>
                <ul>
                    <li>Đầu tiên click vào <strong>+Thêm công ty</strong>. Điền địa chỉ link với map và tên đúng MST -> Bấm "Lưu".</li>
                    <li>Tiếp theo click vào <strong>+Thêm liên hệ</strong>. Điền đầy đủ thông tin -> Bấm "Lưu".</li>
                    <li>Quay lại tab <strong>Quy trình</strong> -> chọn <strong>QT Tư vấn</strong> -> click <strong>+Thêm thương vụ</strong>.</li>
                    <li>Ở phần công ty và liên hệ chỉ cần <strong>search tên và số điện thoại (không chứa số 0 đầu)</strong> và click chọn mà không cần tạo mới nữa -> Bấm tạo.</li>
                </ul>
            </div>
        `
    },
    {
        title: "BƯỚC 2: TIẾP CẬN KHÁCH HÀNG",
        roles: "Vai trò: ADMIN, SALE",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>2.1. GỬI EMAIL VÀ THƯ NGỎ QUA BƯU ĐIỆN</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: ADMIN</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 7 ngày</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>2.2. SẮP XẾP LỊCH GẶP KHÁCH HÀNG</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: ADMIN</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>2.3. CHUẨN BỊ TÀI LIỆU TRÌNH BÀY</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 3 ngày</span>
                    </div>
                </div>
            </div>

            <div class="action-guide-box">
                <h4><i class="fa-solid fa-laptop-code"></i> HƯỚNG DẪN THAO TÁC TRÊN BASE CRM</h4>
                <ul>
                    <li>(Ghi nhớ): Sử dụng tính năng <strong>Cuộc họp</strong> để tạo 1 cuộc họp trong tương lai với KH. CRM sẽ giúp nhắc lịch họp.</li>
                    <li>Sử dụng không gian hệ thống để quản lý email đã gửi/nhận ở tab <strong>Hộp thư</strong>.</li>
                </ul>
            </div>
        `
    },
    {
        title: "BƯỚC 3: KHẢO SÁT VÀ TƯ VẤN - LẤY MẪU",
        roles: "Vai trò: SALE",
        html: `
             <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>3. KHẢO SÁT THÔNG TIN KHÁCH HÀNG</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 3 tháng</span>
                    </div>
                </div>
            </div>
            
            <div class="action-guide-box">
                <h4><i class="fa-solid fa-laptop-code"></i> HƯỚNG DẪN THAO TÁC TRÊN BASE CRM</h4>
                <ul>
                    <li>Cập nhật thông tin trong quá trình làm việc với KH. Bắt buộc báo cáo kịp thời tiến độ khảo sát 3 tháng này.</li>
                    <li>Sử dụng tính năng <strong>Ghi chú</strong> để note lại nội dung cuộc gặp hoặc trao đổi mỗi tuần của Thương vụ.</li>
                    <li>Sử dụng tính năng <strong>Việc cần làm</strong> để tạo kế hoạch làm việc trong tuần tới hoặc tháng tới cho KH.</li>
                </ul>
            </div>
        `
    },
    {
        title: "BƯỚC 4: TẠO REQUEST TEST MẪU",
        roles: "Vai trò: SALE, R&D",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>4.1. TẠO REQUEST TEST MẪU KHÁCH HÀNG</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 4.1/ Request Test mẫu</span>
                        <span><i class="fa-regular fa-clock"></i> T/g: Theo thời gian trên workflow test mẫu</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>4.2. QUY TRÌNH THỬ MẪU</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: R&D</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 4.2/ Workflow Test mẫu</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>4.3. TRẢ KẾT QUẢ THỬ MẪU</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: R&D</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 4.3/ Workflow Test mẫu</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>4.4. ĐÍNH KÈM KẾT QUẢ TEST MẪU LÊN BASE CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 7 Ngày</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 4.4/ CRM</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "BƯỚC 5: CHUYỂN ĐỔI SẢN PHẨM TƯƠNG ĐƯƠNG",
        roles: "Vai trò: SALE, R&D",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>5.1. TẠO REQUEST TEST MẪU (CHỌN MỤC ĐÍCH TEST MẪU CỤ THỂ)</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 5.1/ Request Test mẫu</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>5.2. TẠO REQUEST DUYỆT GIÁ SẢN PHẨM MỚI</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 5.2/ Request duyệt giá sản phẩm mới</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>5.3. CUNG CẤP TÀI LIỆU KỸ THUẬT SẢN PHẨM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: R&D</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 7 Ngày</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 5.3/ Tài liệu kỹ thuật</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>5.4. ĐÍNH KÈM TÀI LIỆU KỸ THUẬT LÊN CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 1 Ngày</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "BƯỚC 6: THỬ MẪU",
        roles: "Vai trò: SALE",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>6.1. TẠO REQUEST THỬ MẪU & ĐÍNH KÈM RQ LÊN CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 6.1/ Request Test mẫu</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>6.2. HOÀN THÀNH BIÊN BẢN THỬ MẪU & ĐÍNH KÈM BIÊN BẢN LÊN CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 3 Ngày</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 6.2/ Mẫu biên bản thử mẫu (1)</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>6.3. HOÀN THÀNH BIÊN BẢN ĐÁNH GIÁ SAU THỬ MẪU & ĐÍNH KÈM BIÊN BẢN LÊN CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 3 Ngày</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 6.3/ Mẫu biên bản đánh giá thử mẫu (2)</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>KẾT QUẢ THỬ NGHIỆM L1 (HOẶC L2/L3)</strong>
                </div>
            </div>
        `
    },
    {
        title: "BƯỚC 7: PROPOSAL",
        roles: "Vai trò: SALE",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>7. SOẠN PROPOSAL GỬI KHÁCH HÀNG</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: 2 Ngày</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 7/ Hồ sơ Proposal</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "BƯỚC 8: ĐÀM PHÁN - KÝ HỢP ĐỒNG",
        roles: "Vai trò: SALE",
        html: `
             <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>8.1. TẠO REQUEST DUYỆT GIÁ BÁN & ĐÍNH KÈM RQ VÀO THƯƠNG VỤ LÊN CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 8.1/ Request duyệt giá</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>8.2. TẠO REQUEST KÝ HỢP ĐỒNG</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 8.2/ Request ký hợp đồng & Workflow ký hợp đồng</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "BƯỚC 9: HOÀN THÀNH",
        roles: "Vai trò: SALE",
        html: `
            <div class="process-box">
                <h4><i class="fa-solid fa-code-branch"></i> THÔNG TIN QUY TRÌNH KINH DOANH</h4>
                <div class="process-task">
                    <strong>9.1. BẤM NÚT ĐẶT HÀNG THÀNH CÔNG TRÊN CRM</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 9.1/ Base CRM</span>
                    </div>
                </div>
                <div class="process-task">
                    <strong>9.2. TẠO ĐƠN HÀNG MỚI</strong>
                    <div class="meta-info">
                        <span><i class="fa-solid fa-user"></i> Người TH: SALE</span>
                        <span><i class="fa-regular fa-clock"></i> Thời gian: Khi phát sinh đơn hàng mới</span>
                        <span><i class="fa-solid fa-file-lines"></i> Biểu mẫu: 9.2/ Sale Portal</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "BỔ TRỢ: CÁC TIỆN ÍCH TRÊN BASE CRM",
        roles: "Kiến thức chung",
        html: `
            <p><strong>Cập nhật thông tin trong quá trình làm việc với KH:</strong></p>
            <div class="utilities-grid">
                <div class="utility-card">
                    <i class="fa-solid fa-note-sticky"></i>
                    <h3>Ghi Chú</h3>
                    <p>Sử dụng ghi chú để note lại nội dung cuộc gặp mặt hay trao đổi công việc trong 1 tuần.</p>
                </div>
                <div class="utility-card">
                    <i class="fa-solid fa-list-check"></i>
                    <h3>Việc Cần Làm</h3>
                    <p>Sử dụng tính năng Việc cần làm để tạo kế hoạch làm việc trong tuần tới hoặc tháng tới cho KH.</p>
                </div>
                <div class="utility-card">
                    <i class="fa-solid fa-calendar-alt"></i>
                    <h3>Cuộc Họp</h3>
                    <p>Sử dụng tính năng Cuộc họp để tạo 1 cuộc họp trong tương lai với KH. CRM sẽ giúp tự nhắc lịch hẹn.</p>
                </div>
            </div>
        `
    }
];

const tocList = document.getElementById('toc-list');
const lessonContent = document.getElementById('lesson-content');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const breadcrumbTitle = document.getElementById('breadcrumb-title');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.course-sidebar');

let currentLesson = 0;
const LESONS_LENGTH = LESSONS.length;

function initCourse() {
    LESSONS.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.className = 'toc-item';
        let icon = 'fa-regular fa-circle-play';
        if (index === LESONS_LENGTH - 1) icon = 'fa-solid fa-book-open';
        li.innerHTML = \`<i class="\${icon} toc-icon"></i> <span>\${lesson.title}</span>\`;
        li.addEventListener('click', () => loadLesson(index));
        tocList.appendChild(li);
    });
    
    loadLesson(0);

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

function updateProgress() {
    const percent = Math.round(((currentLesson + 1) / LESONS_LENGTH) * 100);
    progressText.innerText = \`\${percent}%\`;
    progressFill.style.width = \`\${percent}%\`;
}

function loadLesson(index) {
    if (index < 0 || index >= LESONS_LENGTH) return;
    currentLesson = index;
    
    const items = tocList.querySelectorAll('.toc-item');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === currentLesson);
    });

    const lesson = LESSONS[currentLesson];
    let htmlContent = \`
        <h1>\${lesson.title}</h1>
        <span class="roles-tag"><i class="fa-solid fa-users"></i> \${lesson.roles}</span>
        \${lesson.html}
    \`;
    
    lessonContent.innerHTML = htmlContent;
    breadcrumbTitle.innerText = lesson.title;

    btnPrev.style.visibility = currentLesson === 0 ? 'hidden' : 'visible';
    btnNext.innerHTML = currentLesson === LESONS_LENGTH - 1 ? 'Hoàn Thành <i class="fa-solid fa-check"></i>' : 'Tiếp Theo <i class="fa-solid fa-arrow-right"></i>';

    updateProgress();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('.lesson-container').scrollTo({ top: 0, behavior: 'smooth'});

    if (window.innerWidth <= 800) { sidebar.classList.remove('open'); }
}

btnPrev.addEventListener('click', () => loadLesson(currentLesson - 1));
btnNext.addEventListener('click', () => loadLesson(currentLesson + 1));

document.addEventListener('DOMContentLoaded', initCourse);
