/* ============================================================
   YOHAKU studio — Hero Canvas Ball Animation
   ============================================================ */

/**
 * 跳ね返るボールアニメーション
 * 黒背景のヒーローセクションで白い円形のボールがランダムに動き、
 * 壁で反射して無限に動き続ける。
 */
(function () {
    'use strict';

    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');

    // ─── 設定 ───────────────────────────────────────────────
    const CONFIG = {
        count: 14,            // ボールの数
        minR: 6,              // 最小半径 (px)
        maxR: 70,             // 最大半径 (px)
        minSpeed: 0.4,        // 最小速度
        maxSpeed: 1.1,        // 最大速度
        minOpacity: 0.03,     // 最小不透明度
        maxOpacity: 0.14,     // 最大不透明度
        glowMin: 8,           // グロー最小
        glowMax: 40,          // グロー最大
    };

    let balls = [];
    let animId = null;
    let W = 0, H = 0;

    // ─── キャンバスサイズ同期 ──────────────────────────────
    function resize() {
        W = canvas.width = hero.offsetWidth;
        H = canvas.height = hero.offsetHeight;
    }

    // ─── ボール生成 ────────────────────────────────────────
    function makeBall() {
        const r = CONFIG.minR + Math.random() * (CONFIG.maxR - CONFIG.minR);
        const speed = CONFIG.minSpeed + Math.random() * (CONFIG.maxSpeed - CONFIG.minSpeed);
        const angle = Math.random() * Math.PI * 2;
        return {
            x: r + Math.random() * (W - r * 2),
            y: r + Math.random() * (H - r * 2),
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            r,
            opacity: CONFIG.minOpacity + Math.random() * (CONFIG.maxOpacity - CONFIG.minOpacity),
            glow: CONFIG.glowMin + Math.random() * (CONFIG.glowMax - CONFIG.glowMin),
            // 微妙な脈動フェーズ
            phase: Math.random() * Math.PI * 2,
            phaseSpeed: 0.003 + Math.random() * 0.008,
        };
    }

    function initBalls() {
        balls = Array.from({ length: CONFIG.count }, makeBall);
    }

    // ─── 描画ループ ────────────────────────────────────────
    function draw() {
        ctx.clearRect(0, 0, W, H);

        balls.forEach(b => {
            // 位置を更新
            b.x += b.vx;
            b.y += b.vy;

            // 壁での反射
            if (b.x - b.r < 0) { b.x = b.r; b.vx = Math.abs(b.vx); }
            if (b.x + b.r > W) { b.x = W - b.r; b.vx = -Math.abs(b.vx); }
            if (b.y - b.r < 0) { b.y = b.r; b.vy = Math.abs(b.vy); }
            if (b.y + b.r > H) { b.y = H - b.r; b.vy = -Math.abs(b.vy); }

            // 脈動（sin波で opacity を微妙に揺らす）
            b.phase += b.phaseSpeed;
            const pulsed = b.opacity * (0.85 + 0.15 * Math.sin(b.phase));

            // 描画
            ctx.save();
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);

            // ラジアルグラデーション（中央は明るく、端に向かって透明）
            const grad = ctx.createRadialGradient(
                b.x - b.r * 0.25, b.y - b.r * 0.25, 0,  // ハイライト位置
                b.x, b.y, b.r
            );
            grad.addColorStop(0, `rgba(255, 255, 255, ${pulsed * 1.6})`);
            grad.addColorStop(0.5, `rgba(230, 230, 240, ${pulsed})`);
            grad.addColorStop(1, `rgba(180, 180, 200, 0)`);
            ctx.fillStyle = grad;

            // 発光効果
            ctx.shadowColor = 'rgba(220, 220, 255, 0.5)';
            ctx.shadowBlur = b.glow;

            ctx.fill();
            ctx.restore();
        });

        animId = requestAnimationFrame(draw);
    }

    // ─── 初期化 & リサイズ対応 ────────────────────────────
    resize();
    initBalls();
    draw();

    window.addEventListener('resize', () => {
        resize();
        // リサイズ時はボールを再生成（はみ出し防止）
        initBalls();
    });

    // ページ非表示時はアニメ停止（省エネ）
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animId);
        } else {
            draw();
        }
    });

})();
